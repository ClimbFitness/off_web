import { NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// In-memory storage for queue numbers - in production, use a database
let queueNumber = 1

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Get current queue number and increment for next user
    const currentQueueNumber = queueNumber++

    // Email content
    const subject = `Waitlist: ${currentQueueNumber}`
    const emailBody = `
New Waitlist Signup!

Queue Number: ${currentQueueNumber}
Email: ${email}
Timestamp: ${new Date().toISOString()}

---
This email was automatically generated from the Climb waitlist form.
    `.trim()

    // Create mailto URL (this will work for local testing)
    // In production, you'd want to use a proper email service like SendGrid, Resend, etc.
    const mailtoUrl = `mailto:climbfitnessco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    // Send email using Resend
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: process.env.WAITLIST_EMAIL_FROM || 'onboarding@resend.dev',
          to: process.env.WAITLIST_EMAIL_TO || 'climbfitnessco@gmail.com',
          subject: subject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #c34d00;">🎉 New Waitlist Signup!</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Queue Number:</strong> ${currentQueueNumber}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              </div>
              <p style="color: #666; font-size: 12px;">
                This email was automatically generated from the Climb waitlist form.
              </p>
            </div>
          `
        })
        
        console.log("✅ Email sent successfully to climbfitnessco@gmail.com")
      } else {
        console.log("⚠️ RESEND_API_KEY not found, falling back to console logging")
        console.log("=== WAITLIST EMAIL ===")
        console.log("To: climbfitnessco@gmail.com")
        console.log("Subject:", subject)
        console.log("Body:", emailBody)
        console.log("Queue Number:", currentQueueNumber)
        console.log("=====================")
      }
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError)
      // Don't fail the whole request if email fails
    }

    return NextResponse.json({
      success: true,
      queueNumber: currentQueueNumber,
      message: "Successfully added to waitlist!"
    })

  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Optional: Add GET endpoint to retrieve waitlist stats
export async function GET() {
  return NextResponse.json({
    totalSignups: queueNumber - 1,
    nextQueueNumber: queueNumber
  })
} 
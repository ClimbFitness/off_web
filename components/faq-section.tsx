"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FaqSection() {
  const faqs = [
    {
      question: "Wait, so Climb gives me rewards for free?",
      answer:
        "Yes! Our goal is to make it possible for you to achieve YOUR fitness goals; you pay with your effort. Whether it be weightlifting, running, or losing weight, we're here to reward you for it. ",
    },
    {
      question: "Let me guess, it's impossible to accumulate enough points to get rewards?",
      answer:
        "Not at all. Our free core model is already faster to accumulate monetary value faster than any other major fitness app. Our premium model will allow you to get rewards 6x faster."
    },
    {
      question: "What if there's a product I want that's not on your rewards store?",
      answer:
        "We thought of that, and although we have myriad products, we also offer gift cards to all major brands. If you're looking for something specific, contact us and we'll trade your points for your personal reward."
      },
    {
      question: "Why offer Premium for free initially?",
      answer:
        "We wanted everyone to understand our app in it's entirety before we ask them to pay for it. We're confident that once you see the value, you'll want to upgrade."
    },
    {
      question: "How do you guys stay in business?",
      answer:
        "We're a small team that isn't focused on our salaries - we've ensured stability and longevity to put the rewards in your hands."
    },
    {
      question: "How do I switch between different pricing plans?",
      answer:
        "You can easily upgrade or downgrade your subscription at any time from your account dashboard. When upgrading, you'll immediately gain access to additional features. If you downgrade, you'll continue to have access to your current plan until the end of your billing cycle, after which the new plan will take effect.",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
              <AccordionTrigger className="text-left text-lg font-light py-6 hover:text-orange-400 transition-colors">
                <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

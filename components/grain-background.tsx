"use client"

import { useEffect, useRef } from "react"

export function GrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grain pattern
    let frame = 0
    const patternSize = 150
    const patternData = new Uint8ClampedArray(patternSize * patternSize * 4)

    const generatePattern = () => {
      for (let i = 0; i < patternSize * patternSize; i++) {
        const value = Math.floor(Math.random() * 255 * 0.05) // Low opacity for subtle effect
        patternData[i * 4] = patternData[i * 4 + 1] = patternData[i * 4 + 2] = 255
        patternData[i * 4 + 3] = value
      }
    }

    const animate = () => {
      frame = requestAnimationFrame(animate)

      if (frame % 2 === 0) {
        // Only update every other frame for performance
        generatePattern()

        const patternCanvas = document.createElement("canvas")
        patternCanvas.width = patternSize
        patternCanvas.height = patternSize

        const patternCtx = patternCanvas.getContext("2d")
        if (!patternCtx) return

        const imageData = new ImageData(patternData, patternSize, patternSize)
        patternCtx.putImageData(imageData, 0, 0)

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const pattern = ctx.createPattern(patternCanvas, "repeat")
        if (pattern) {
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 mix-blend-overlay z-50"
      aria-hidden="true"
    />
  )
}

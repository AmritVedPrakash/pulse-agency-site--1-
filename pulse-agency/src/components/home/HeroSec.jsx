
import React, { useEffect, useRef } from 'react'

export default function HeroSec() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current

    if (!section || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Load all 240 frames from the assets folder
    const frameModules = import.meta.glob(
      '/src/assets/ezgif-439bfb2f556ad8c0-jpg/ezgif-frame-*.jpg',
      {
        eager: true,
        query: '?url',
        import: 'default',
      }
    )

    // Sort frames numerically: 001, 002, 003 ... 240
    const frameUrls = Object.entries(frameModules)
      .sort(([a], [b]) => {
        const getNumber = (path) =>
          Number(path.match(/ezgif-frame-(\d+)/)?.[1] || 0)

        return getNumber(a) - getNumber(b)
      })
      .map(([, url]) => url)

    if (!frameUrls.length) {
      console.error(
        'No frames found. Please check the assets folder path.'
      )
      return
    }

    const images = new Array(frameUrls.length)
    let loadedCount = 0
    let currentFrame = -1
    let animationFrameId = 0
    let resizeObserver
    let destroyed = false

    const clamp = (value, min, max) =>
      Math.min(Math.max(value, min), max)

    // Resize canvas for sharp rendering on high-DPI screens
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      drawFrame(currentFrame < 0 ? 0 : currentFrame)
    }

    // Draw image without stretching or distorting it
    const drawFrame = (frameIndex) => {
      if (destroyed) return

      const image = images[frameIndex]
      if (!image?.complete || !image.naturalWidth) return

      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      if (!width || !height) return

      const imageRatio = image.naturalWidth / image.naturalHeight
      const canvasRatio = width / height

      // Cover the canvas while keeping the original aspect ratio
      let drawWidth
      let drawHeight

      if (imageRatio > canvasRatio) {
        drawHeight = height
        drawWidth = height * imageRatio
      } else {
        drawWidth = width
        drawHeight = width / imageRatio
      }

      const x = (width - drawWidth) / 2
      const y = (height - drawHeight) / 2

      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(image, x, y, drawWidth, drawHeight)
    }

    // Convert scroll progress into a frame number
    const renderOnScroll = () => {
      if (destroyed) return

      const rect = section.getBoundingClientRect()
      const scrollDistance = section.offsetHeight - window.innerHeight

      const progress =
        scrollDistance > 0
          ? clamp(-rect.top / scrollDistance, 0, 1)
          : 0

      const nextFrame = Math.min(
        frameUrls.length - 1,
        Math.floor(progress * frameUrls.length)
      )

      if (nextFrame !== currentFrame) {
        currentFrame = nextFrame
        drawFrame(currentFrame)
      }
    }

    // Use requestAnimationFrame for smooth scroll updates
    const onScroll = () => {
      if (animationFrameId) return

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0
        renderOnScroll()
      })
    }

    // Preload frames
    frameUrls.forEach((url, index) => {
      const image = new Image()

      image.decoding = 'async'
      image.src = url

      image.onload = () => {
        if (destroyed) return

        loadedCount += 1

        // Render the first frame as soon as it is available
        if (index === 0) {
          currentFrame = 0
          drawFrame(0)
        }

        // Redraw the current frame if it has just loaded
        if (index === currentFrame) {
          drawFrame(index)
        }
      }

      image.onerror = () => {
        console.warn(`Could not load frame ${index + 1}:`, url)
      }

      images[index] = image
    })

    resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    resizeCanvas()
    renderOnScroll()

    return () => {
      destroyed = true

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }

      resizeObserver?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      images.forEach((image) => {
        if (image) {
          image.onload = null
          image.onerror = null
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-black"
    >
      {/* Sticky animation viewport */}
      <div className="sticky top-0 h-[100svh] min-h-[400px] w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          aria-label="Scroll-controlled image sequence animation"
          role="img"
        />
      </div>
    </section>
  )
}

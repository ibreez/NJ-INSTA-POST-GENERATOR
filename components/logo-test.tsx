"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LogoTest() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    // Update window width on mount and resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Logo Display Test</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Current Screen Width: {windowWidth}px</h3>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Logo with fill:</h3>
          <div className="border-2 border-rose-600 rounded-lg bg-black w-[100px] h-[100px] relative">
            <Image src="/images/nj-logo-1.jpg" alt="NJ Hardware Logo" fill className="object-contain" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Logo with explicit dimensions:</h3>
          <div className="border-2 border-rose-600 rounded-lg bg-black inline-block p-2">
            <Image
              src="/images/nj-logo-1.jpg"
              alt="NJ Hardware Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Logo with cover:</h3>
          <div className="border-2 border-rose-600 rounded-lg bg-black w-[100px] h-[100px] relative">
            <Image src="/images/nj-logo-1.jpg" alt="NJ Hardware Logo" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

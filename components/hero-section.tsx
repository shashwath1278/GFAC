"use client"

import Image from "next/image"
import TextType from "./text-type"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/animation gfc.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#88C642]/40 to-transparent" />

      {/* Center Text */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-balance text-center flex flex-col items-center justify-center gap-2">
          {/* Line 1: Goal */}
          <div className="flex items-center justify-center gap-0.5">
            <span>G</span>
            <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden inline-block border-2 border-white/20">
              <Image
                src="/football gfc.jpg"
                alt="Letter O displayed as football"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span>al</span>
          </div>

          {/* Line 2: For A Cause */}
          <div className="block">
            <TextType
              text={["For A Cause"]}
              typingSpeed={150}
              startOnVisible={true}
              showCursor={true}
              cursorCharacter="|"
              className="inline"
              loop={false}
            />
          </div>
        </h1>
        <p className="text-lg md:text-2xl font-light text-balance px-4">One Day. One Game. One Purpose.</p>
      </div>
    </section>
  )
}

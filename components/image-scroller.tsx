"use client"

import DomeGallery from "./dome-gallery"
import Image from "next/image"

export default function ImageScroller() {
  const images = [
    { id: 1, alt: "Moment 1", src: "/mom1.jpeg" },
    { id: 2, alt: "Moment 2", src: "/mom2.jpeg" },
    { id: 3, alt: "Moment 3", src: "/mom3.jpeg" },
    { id: 4, alt: "Moment 4", src: "/mom4.jpeg" },
    { id: 5, alt: "Moment 5", src: "/mom5.jpeg" },
    { id: 6, alt: "Moment 6", src: "/mom6.jpeg" },
    { id: 7, alt: "Moment 7", src: "/mom7.jpeg" },
    { id: 8, alt: "Moment 8", src: "/mom8.jpeg" },
    // Duplicate to fill space if needed, though DomeGallery handles it
    { id: 9, alt: "Moment 9", src: "/mom1.jpeg" },
    { id: 10, alt: "Moment 10", src: "/mom2.jpeg" },
    { id: 11, alt: "Moment 11", src: "/mom3.jpeg" },
    { id: 12, alt: "Moment 12", src: "/mom4.jpeg" },
    { id: 13, alt: "Moment 13", src: "/mom5.jpeg" },
    { id: 14, alt: "Moment 14", src: "/mom6.jpeg" },
    { id: 15, alt: "Moment 15", src: "/mom7.jpeg" }
  ]

  const galleryImages = images.map(img => ({
    src: img.src,
    alt: img.alt
  }))

  return (
    <section id="past-events" className="w-full h-screen relative bg-black overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/mom1.jpeg"
          alt="background blur"
          fill
          unoptimized
          className="object-cover blur-3xl"
        />
      </div>

      <div className="absolute inset-0 z-10">
        <DomeGallery
          images={galleryImages}
          overlayBlurColor="#000000" // Match section bg
          fit={0.65} // Adjust fit for visual preference
          grayscale={false}
        />
      </div>

      <div className="absolute top-8 left-0 right-0 z-20 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Moments From Past Events
        </h2>
      </div>
    </section>
  )
}

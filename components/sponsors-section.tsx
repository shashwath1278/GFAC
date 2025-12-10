
"use client";

import Threads from "./threads"
import LogoLoop from "./logo-loop"
import Image from "next/image"

export default function SponsorsSection() {
  const sponsors = [
    { src: "/drunken-monkey.jpg", alt: "Drunken Monkey" },
    { src: "/Fastrack.png", alt: "Fastrack" },
    { src: "/ghack.png", alt: "GHack" },
    { src: "/growvation.jpg", alt: "Growvation" },
    { src: "/modified-tea.png", alt: "Modified Tea" },
    { src: "/prepnest.png", alt: "PrepNest" },
    { src: "/Q.png", alt: "Q" },
    { src: "/redbull.png", alt: "Red Bull" },
    { src: "/benefix.jpg", alt: "Benefix" },
    { src: "/cheetah-ai.png", alt: "Cheetah AI" },
    { src: "/swiggy.png", alt: "Swiggy" },
    { src: "/belgianwaffle.webp", alt: "Belgian Waffle" },
    { src: "/bindu gfc.png", alt: "Bindu Jeera" },
  ]

  return (
    <section className="w-full py-16 relative overflow-hidden bg-black">
      {/* Background Threads */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Sponsors</h2>

        {/* Logo Loop */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={sponsors}
            speed={40}
            direction="left"
            logoHeight={120} // Increased size for visibility
            gap={60}
            scaleOnHover
            renderItem={(item: any) => (
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 flex items-center justify-center bg-white shadow-lg p-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          />
        </div>

        <div className="mt-12 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-wide mb-2 opacity-90">Contact for Sponsorships</p>
          <p className="text-lg font-medium">Manu Smriti</p>
          <p className="text-lg">Contact : +91 93285-06454</p>
        </div>
      </div>
    </section>
  )
}

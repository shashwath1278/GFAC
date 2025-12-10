"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import EventDetails from "@/components/event-details"
import ImageScroller from "@/components/image-scroller"
import RegistrationRules from "@/components/registration-rules"
import SponsorsSection from "@/components/sponsors-section"
import TeamsSection from "@/components/teams-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-white text-black">
      <Navbar />
      <HeroSection />
      <EventDetails />
      <ImageScroller />
      <RegistrationRules />
      <SponsorsSection />

      <TeamsSection />
      <Footer />
    </main>
  )
}

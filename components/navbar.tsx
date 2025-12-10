"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${isSticky || isOpen ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-white text-xl font-bold flex items-center gap-0.5"
            >
              <span>G</span>
              <span>o</span>
              <span>al For A Cause</span>
            </Link>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-[#88C642] transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("event-details")}
              className="text-white hover:text-[#88C642] transition-colors text-sm font-medium"
            >
              Details
            </button>
            <button
              onClick={() => scrollToSection("registration")}
              className="text-white hover:text-[#88C642] transition-colors text-sm font-medium"
            >
              Registration
            </button>
            <button
              onClick={() => scrollToSection("teams")}
              className="text-white hover:text-[#88C642] transition-colors text-sm font-medium"
            >
              Teams
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-white hover:text-[#88C642] transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-8 gap-6 shadow-xl h-screen">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              setIsOpen(false)
            }}
            className="text-white hover:text-[#88C642] transition-colors text-lg font-medium"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("event-details")
              setIsOpen(false)
            }}
            className="text-white hover:text-[#88C642] transition-colors text-lg font-medium"
          >
            Details
          </button>
          <button
            onClick={() => {
              scrollToSection("registration")
              setIsOpen(false)
            }}
            className="text-white hover:text-[#88C642] transition-colors text-lg font-medium"
          >
            Registration
          </button>
          <button
            onClick={() => {
              scrollToSection("teams")
              setIsOpen(false)
            }}
            className="text-white hover:text-[#88C642] transition-colors text-lg font-medium"
          >
            Teams
          </button>
          <button
            onClick={() => {
              scrollToSection("footer")
              setIsOpen(false)
            }}
            className="text-white hover:text-[#88C642] transition-colors text-lg font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

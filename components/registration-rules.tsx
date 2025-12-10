"use client"

import Link from "next/link"

export default function RegistrationRules() {
  return (
    <section id="registration" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Volunteer Registration */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">Volunteer Registration</h2>
            <p className="text-gray-600 mb-8">
              Join our team and help make this charity event a success. Register now to volunteer and support a great
              cause!
            </p>
            <Link
              href="https://forms.gle/VQXqkTkcCgwJmEB19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#88C642] hover:bg-[#7ab535] text-black font-bold py-3 px-8 rounded-lg w-fit transition-colors"
            >
              Register as Volunteer
            </Link>
          </div>

          {/* Right Column - Rules File */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">Tournament Rules</h2>
            <p className="text-gray-600 mb-8">
              Understand the rules and regulations that govern our tournament. Make sure to review them before the
              event.
            </p>
            <Link
              href="/rules gfc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#88C642] hover:bg-[#7ab535] text-black font-bold py-3 px-8 rounded-lg w-fit transition-colors"
            >
              View Rulebook
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

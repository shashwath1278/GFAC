"use client"

import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventDetails() {
    return (
        <section id="event-details" className="w-full py-16 bg-gray-50 text-black flex flex-col items-center justify-center gap-12 relative z-20">

            <div className="text-center space-y-4 px-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
                    Event details
                </h2>
                <div className="w-24 h-1 bg-[#88C642] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-6xl px-4">
                {/* Date */}
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="p-4 rounded-full bg-black/5 border border-black/10 group-hover:border-[#88C642]/50 transition-colors duration-300">
                        <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[#88C642]" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-black/90">Date</h3>
                        <p className="text-2xl md:text-3xl font-bold tracking-wide">12-12-25</p>
                    </div>
                </div>

                {/* Time */}
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="p-4 rounded-full bg-black/5 border border-black/10 group-hover:border-[#88C642]/50 transition-colors duration-300">
                        <Clock className="w-8 h-8 md:w-10 md:h-10 text-[#88C642]" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-black/90">Time</h3>
                        <p className="text-2xl md:text-3xl font-bold tracking-wide">12:00 pm</p>
                    </div>
                </div>

                {/* Venue */}
                <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="p-4 rounded-full bg-black/5 border border-black/10 group-hover:border-[#88C642]/50 transition-colors duration-300">
                        <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#88C642]" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-black/90">Venue</h3>
                        <p className="text-xl md:text-2xl font-bold tracking-wide max-w-[300px]">
                            Matchday, New Bel Rd, opp Paradise Biryani
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

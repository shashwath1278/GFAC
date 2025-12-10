import Image from "next/image"

export default function TeamsSection() {
  const teams = [
    { sNo: 1, name: "Ecell", captain: "Archit", logo: "/1.ECELL LOGO normal.png" },
    { sNo: 2, name: "IEEE RITB", captain: "Nishanth P Kashyap", logo: "/ieee gfc.jpg" },
    { sNo: 3, name: "ClutchRit", captain: "Pranav K S", logo: "/clutch rit gfc.jpg" },
    { sNo: 4, name: "Nakama", captain: "Yash Budhia", logo: "/nakama gfc.png" },
    { sNo: 5, name: "UXRIT", captain: "Shreekrishna T", logo: "/uxrit gfc.png" },
    { sNo: 6, name: "CodeRIT", captain: "Shamanth", logo: "/code rit gfc.png" },
    { sNo: 7, name: "Debsoc", captain: "Aarib Anwar", logo: "/debsoc gfc.jpg" },
    { sNo: 8, name: "Edhitha", captain: "Venugopal", logo: "/editha gfc.png" },
    { sNo: 9, name: "Stier Racing", captain: "Shamikh Mohammed", logo: "/stier gfc.jpeg" },
    { sNo: 10, name: "VOLANTE", captain: "Ninnad", logo: "/volante gfc.jpg" },
    { sNo: 11, name: "Comedy Club x Theatrix", captain: "Aditya Raghav", logo: "/theatrix gfc.png" }, // Assuming this covers both or just Theatrix
    { sNo: 12, name: "SOA RIT", captain: "Nehal Singh", logo: "/soa gfc.jpeg" },
    { sNo: 13, name: "Quatlas", captain: "Vignesh Iyer", logo: "/quatlas gfc.jpg" },
    { sNo: 14, name: "WMT", captain: "Johan Mathew", logo: "/wmt gfc.jpg" },
    { sNo: 15, name: "Freshers United", captain: "Garv Bhat", logo: "/freshers gfc.jpg" },
    { sNo: 16, name: "Velocita", captain: "Likith", logo: "/velocita gfc.png" },
  ]

  return (
    <section
      id="teams"
      className="w-full py-20 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/football-field-background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-white">Participating Teams</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#22C55E]">
                <th className="border border-gray-300 px-6 py-4 text-white text-left">S.No</th>
                <th className="border border-gray-300 px-6 py-4 text-white text-left">Team Name</th>
                <th className="border border-gray-300 px-6 py-4 text-white text-left">Captain</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={team.sNo}
                  className={index % 2 === 0 ? "bg-gray-800/80 backdrop-blur-sm" : "bg-gray-900/80 backdrop-blur-sm"}
                >
                  <td className="border border-gray-300 px-6 py-4 text-white">{team.sNo}</td>
                  <td className="border border-gray-300 px-6 py-4 text-white">
                    <div className="flex items-center gap-3">
                      {team.logo && (
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <Image
                            src={team.logo}
                            alt={`${team.name} logo`}
                            fill
                            className="rounded-full object-contain p-1 border border-white/20 bg-white/10"
                          />
                        </div>
                      )}
                      <span>{team.name}</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-white">{team.captain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-white text-3xl md:text-4xl font-bold font-serif">
          Join us on the field and cheer for your favorite teams — every goal supports a cause!
        </p>
      </div>
    </section>
  )
}

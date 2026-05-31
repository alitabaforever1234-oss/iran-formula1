import Link from "next/link"

const drivers = [

  {
    slug: "verstappen",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: 1,
  },

  {
    slug: "hamilton",
    name: "Lewis Hamilton",
    team: "Ferrari",
    number: 44,
  },

  {
    slug: "leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    number: 16,
  },

  {
    slug: "alonso",
    name: "فرناندو آلونسو",
    team: "استون مارتین",
    number: 14,
    image: "/drivers/alonso.jpg",
  },

  {
    slug: "norris",
    name: "Lando Norris",
    team: "McLaren",
    number: 4,
  },

  {
    slug: "piastri",
    name: "Oscar Piastri",
    team: "McLaren",
    number: 81,
  },

]

export default function DriversPage() {

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <h1 className="text-5xl font-black mb-12">
        رانندگان فرمول ۱
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {drivers.map((driver) => (

          <Link
            key={driver.slug}
            href={`/drivers/${driver.slug}`}
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/40 transition hover:-translate-y-1">

              <div className="h-72 bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-7xl font-black">

                {driver.number}

              </div>

              <div className="p-6">

                <h2 className="text-3xl font-bold">
                  {driver.name}
                </h2>

                <p className="mt-4 text-gray-400 text-lg">
                  {driver.team}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  )

}

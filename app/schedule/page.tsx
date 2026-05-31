import Link from "next/link"

const races = [

  {
    slug: "australia-gp",
    name: "گرندپری استرالیا",
    date: "۱۵-۱۷ اسفند",
    sprint: false,
  },

  {
    slug: "china-gp",
    name: "گرندپری چین",
    date: "۱-۳ فروردین",
    sprint: true,
  },

  {
    slug: "japan-gp",
    name: "گرندپری ژاپن",
    date: "۷-۹ فروردین",
    sprint: false,
  },

  {
    slug: "miami-gp",
    name: "گرندپری میامی",
    date: "۱۱-۱۳ اردیبهشت",
    sprint: true,
  },

  {
    slug: "canada-gp",
    name: "گرندپری کانادا",
    date: "۱-۳ خرداد",
    sprint: true,
  },

  {
    slug: "monaco-gp",
    name: "گرندپری موناکو",
    date: "۱۵-۱۷ خرداد",
    sprint: false,
  },

  {
    slug: "spain-gp",
    name: "گرندپری اسپانیا",
    date: "۲۲-۲۴ خرداد",
    sprint: false,
  },

]

export default function SchedulePage() {

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <h1 className="text-5xl font-black mb-12">
        تقویم فرمول ۱ ۲۰۲۶
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {races.map((race) => (

          <Link
            key={race.slug}
            href={`/schedule/${race.slug}`}
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/40 transition">

              <div className="flex items-center justify-between">

                <h2 className="text-3xl font-bold">
                  {race.name}
                </h2>

                {race.sprint && (

                  <div className="bg-red-600 px-4 py-2 rounded-full text-sm">
                    Sprint
                  </div>

                )}

              </div>

              <p className="mt-6 text-gray-400 text-xl">
                {race.date}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  )

}

import Link from "next/link"

const races = [

  {
    slug: "australia-gp",
    name: "گرندپری استرالیا",
    date: "۱۵-۱۷ اسفند",
    sprint: false,
    raceDate: "2026-03-17",
  },

  {
    slug: "china-gp",
    name: "گرندپری چین",
    date: "۱-۳ فروردین",
    sprint: true,
    raceDate: "2026-03-23",
  },

  {
    slug: "japan-gp",
    name: "گرندپری ژاپن",
    date: "۷-۹ فروردین",
    sprint: false,
    raceDate: "2026-03-29",
  },

  {
    slug: "miami-gp",
    name: "گرندپری میامی",
    date: "۱۱-۱۳ اردیبهشت",
    sprint: true,
    raceDate: "2026-05-03",
  },

  {
    slug: "canada-gp",
    name: "گرندپری کانادا",
    date: "۱-۳ خرداد",
    sprint: true,
    raceDate: "2026-05-24",
  },

  {
    slug: "monaco-gp",
    name: "گرندپری موناکو",
    date: "۱۵-۱۷ خرداد",
    sprint: false,
    raceDate: "2026-06-07",
  },

  {
    slug: "spain-gp",
    name: "گرندپری اسپانیا",
    date: "۲۲-۲۴ خرداد",
    sprint: false,
    raceDate: "2026-06-14",
  },

  {
    slug: "austria-gp",
    name: "گرندپری اتریش",
    date: "۵-۷ تیر",
    sprint: false,
    raceDate: "2026-06-28",
  },

  {
    slug: "britain-gp",
    name: "گرندپری بریتانیا",
    date: "۱۲-۱۴ تیر",
    sprint: true,
    raceDate: "2026-07-05",
  },

  {
    slug: "belgium-gp",
    name: "گرندپری بلژیک",
    date: "۲۶-۲۸ تیر",
    sprint: false,
    raceDate: "2026-07-19",
  },

  {
    slug: "hungary-gp",
    name: "گرندپری مجارستان",
    date: "۲-۴ مرداد",
    sprint: false,
    raceDate: "2026-07-26",
  },

  {
    slug: "netherlands-gp",
    name: "گرندپری هلند",
    date: "۳۰ مرداد - ۱ شهریور",
    sprint: true,
    raceDate: "2026-08-23",
  },

  {
    slug: "italy-gp",
    name: "گرندپری ایتالیا",
    date: "۱۳-۱۵ شهریور",
    sprint: false,
    raceDate: "2026-09-06",
  },

  {
    slug: "madrid-gp",
    name: "گرندپری مادرید",
    date: "۲۰-۲۲ شهریور",
    sprint: false,
    raceDate: "2026-09-13",
  },

  {
    slug: "azerbaijan-gp",
    name: "گرندپری آذربایجان",
    date: "۲-۴ مهر",
    sprint: false,
    raceDate: "2026-09-26",
  },

  {
    slug: "singapore-gp",
    name: "گرندپری سنگاپور",
    date: "۱۷-۱۹ مهر",
    sprint: true,
    raceDate: "2026-10-11",
  },

  {
    slug: "austin-gp",
    name: "گرندپری آمریکا",
    date: "۱-۳ آبان",
    sprint: false,
    raceDate: "2026-10-25",
  },

  {
    slug: "mexico-gp",
    name: "گرندپری مکزیک",
    date: "۸-۱۰ آبان",
    sprint: false,
    raceDate: "2026-11-01",
  },

  {
    slug: "brazil-gp",
    name: "گرندپری برزیل",
    date: "۱۵-۱۷ آبان",
    sprint: false,
    raceDate: "2026-11-08",
  },

  {
    slug: "las-vegas-gp",
    name: "گرندپری لاس‌وگاس",
    date: "۲۸-۳۰ آبان",
    sprint: false,
    raceDate: "2026-11-22",
  },

  {
    slug: "qatar-gp",
    name: "گرندپری قطر",
    date: "۶-۸ آذر",
    sprint: false,
    raceDate: "2026-11-29",
  },

  {
    slug: "abu-dhabi-gp",
    name: "گرندپری ابوظبی",
    date: "۱۳-۱۵ آذر",
    sprint: false,
    raceDate: "2026-12-06",
  },

]

function getRaceStatus(date: string) {

  const now = new Date()

  const raceDate = new Date(date)

  const diff =
    raceDate.getTime() - now.getTime()

  const days =
    diff / (1000 * 60 * 60 * 24)

  if (days < -3) {
    return "finished"
  }

  if (days >= -3 && days <= 3) {
    return "live"
  }

  return "future"

}

export default function SchedulePage() {

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <h1 className="text-5xl font-black mb-12">
        تقویم فرمول ۱ ۲۰۲۶
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {races.map((race) => {

          const status =
            getRaceStatus(race.raceDate)

          return (

            <Link
              key={race.slug}
              href={`/schedule/${race.slug}`}
            >

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/40 transition overflow-hidden">

                {/* Status */}

                <div className="absolute top-4 left-4">

                  {status === "finished" && (

                    <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold">

                      تمام شده

                    </div>

                  )}

                  {status === "live" && (

                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">

                      درحال برگزاری

                    </div>

                  )}

                  {status === "future" && (

                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">

                      آینده

                    </div>

                  )}

                </div>

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

          )

        })}

      </div>

    </div>

  )

}
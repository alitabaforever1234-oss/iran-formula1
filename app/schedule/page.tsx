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

{
  slug: "austria-gp",
  name: "گرندپری اتریش",
  date: "۵-۷ تیر",
  sprint: false,
},

{
  slug: "britain-gp",
  name: "گرندپری بریتانیا",
  date: "۱۲-۱۴ تیر",
  sprint: true,
},

{
  slug: "belgium-gp",
  name: "گرندپری بلژیک",
  date: "۲۶-۲۸ تیر",
  sprint: false,
},

{
  slug: "hungary-gp",
  name: "گرندپری مجارستان",
  date: "۲-۴ مرداد",
  sprint: false,
},

{
  slug: "netherlands-gp",
  name: "گرندپری هلند",
  date: "۳۰ مرداد - ۱ شهریور",
  sprint: true,
},

{
  slug: "italy-gp",
  name: "گرندپری ایتالیا",
  date: "۱۳-۱۵ شهریور",
  sprint: false,
},

{
  slug: "madrid-gp",
  name: "گرندپری مادرید",
  date: "۲۰-۲۲ شهریور",
  sprint: false,
},

{
  slug: "azerbaijan-gp",
  name: "گرندپری آذربایجان",
  date: "۲-۴ مهر",
  sprint: false,
},

{
  slug: "singapore-gp",
  name: "گرندپری سنگاپور",
  date: "۱۷-۱۹ مهر",
  sprint: true,
},

{
  slug: "austin-gp",
  name: "گرندپری آمریکا",
  date: "۱-۳ آبان",
  sprint: false,
},

{
  slug: "mexico-gp",
  name: "گرندپری مکزیک",
  date: "۸-۱۰ آبان",
  sprint: false,
},

{
  slug: "brazil-gp",
  name: "گرندپری برزیل",
  date: "۱۵-۱۷ آبان",
  sprint: false,
},

{
  slug: "las-vegas-gp",
  name: "گرندپری لاس‌وگاس",
  date: "۲۸-۳۰ آبان",
  sprint: false,
},

{
  slug: "qatar-gp",
  name: "گرندپری قطر",
  date: "۶-۸ آذر",
  sprint: false,
},

{
  slug: "abu-dhabi-gp",
  name: "گرندپری ابوظبی",
  date: "۱۳-۱۵ آذر",
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

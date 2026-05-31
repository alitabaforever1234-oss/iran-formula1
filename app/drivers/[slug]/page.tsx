const drivers: any = {

  "alonso": {

    name: "Fernando Alonso",

    team: "Aston Martin",

    number: 14,

    country: "Spain",

    championships: 2,

    wins: 32,

    podiums: 106,

    bio: `
فرناندو آلونسو یکی از بزرگ‌ترین رانندگان تاریخ فرمول ۱ است.
او قهرمان جهان در فصل‌های 2005 و 2006 شد و به خاطر دفاع‌های فوق‌العاده،
هوش مسابقه‌ای و طول عمر حرفه‌ای‌اش شناخته می‌شود.(تست)
    `,

    poster: "/drivers/alonso.jpg",

  },

}

export default async function DriverPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const driver = drivers[slug]

  if (!driver) {

    return (

      <div className="min-h-screen flex items-center justify-center text-white text-3xl">

        راننده پیدا نشد

      </div>

    )

  }

  return (

    <div className="min-h-screen text-white">

      <div className="relative h-[500px] overflow-hidden">

        <img
          src={driver.poster}
          alt={driver.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10">

          <div className="text-8xl font-black text-red-500">
            #{driver.number}
          </div>

          <h1 className="text-6xl font-black mt-4">
            {driver.name}
          </h1>

          <p className="text-2xl text-gray-300 mt-4">
            {driver.team}
          </p>

        </div>

      </div>

      <div className="px-8 md:px-16 py-16">

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="text-gray-400">
              کشور
            </div>

            <div className="text-3xl font-bold mt-4">
              {driver.country}
            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="text-gray-400">
              قهرمانی جهان
            </div>

            <div className="text-3xl font-bold mt-4">
              {driver.championships}
            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="text-gray-400">
              بردها
            </div>

            <div className="text-3xl font-bold mt-4">
              {driver.wins}
            </div>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

          <h2 className="text-4xl font-black mb-8">
            درباره راننده
          </h2>

          <p className="text-xl text-gray-300 leading-loose">
            {driver.bio}
          </p>

        </div>

      </div>

    </div>

  )

}


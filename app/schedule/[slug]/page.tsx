const races: any = {

  "australia-gp": {
    name: "گرندپری استرالیا",
    sessions: [

      {
        title: "تمرین اول",
        time: "۱۵ اسفند — ۱:۳۰ تا ۲:۳۰",
      },

      {
        title: "تمرین دوم",
        time: "۱۵ اسفند — ۵:۰۰ تا ۶:۰۰",
      },

      {
        title: "تمرین سوم",
        time: "۱۶ اسفند — ۱:۳۰ تا ۲:۳۰",
      },

      {
        title: "تعیین خط",
        time: "۱۶ اسفند — ۵:۰۰ تا ۶:۰۰",
      },

      {
        title: "مسابقه",
        time: "۱۷ اسفند — ۴:۰۰",
      },

    ],
  },

  "china-gp": {
    name: "گرندپری چین",
    sessions: [

      {
        title: "تمرین",
        time: "جمعه — ۷:۰۰ تا ۸:۰۰",
      },

      {
        title: "اسپرینت کوالی",
        time: "جمعه — ۱۱:۰۰ تا ۱۲:۰۰",
      },

      {
        title: "اسپرینت",
        time: "شنبه — ۶:۳۰ تا ۷:۳۰",
      },

      {
        title: "تعیین خط",
        time: "شنبه — ۱۰:۳۰ تا ۱۱:۳۰",
      },

      {
        title: "مسابقه",
        time: "یکشنبه — ۱۰:۳۰",
      },

    ],
  },

}

export default async function RacePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const race = races[slug]

  if (!race) {

    return (

      <div className="min-h-screen flex items-center justify-center text-white text-3xl">

        مسابقه پیدا نشد

      </div>

    )

  }

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <h1 className="text-5xl font-black mb-12">
        {race.name}
      </h1>

      <div className="space-y-6">

        {race.sessions.map((session: any, index: number) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-between"
          >

            <div className="text-2xl font-bold">
              {session.title}
            </div>

            <div className="text-gray-400 text-xl">
              {session.time}
            </div>

          </div>

        ))}

      </div>

    </div>

  )

}


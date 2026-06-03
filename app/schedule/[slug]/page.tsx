const races: any = {

  "australia-gp": {
    name: "گرندپری استرالیا",
    raceDate: "2026-03-17",

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
    raceDate: "2026-03-23",

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

  // بقیه ریس ها...

}

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

  const status =
    getRaceStatus(race.raceDate)

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      {/* Header */}

      <div className="flex items-center justify-between mb-12">

        <h1 className="text-5xl font-black">
          {race.name}
        </h1>

        {/* Status */}

        <div>

          {status === "finished" && (

            <div className="bg-gray-600 text-white px-6 py-3 rounded-full text-lg font-bold">

              تمام شده

            </div>

          )}

          {status === "live" && (

            <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">

              درحال برگزاری

            </div>

          )}

          {status === "future" && (

            <div className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold">

              آینده

            </div>

          )}

        </div>

      </div>

      {/* Sessions */}

      <div className="space-y-6">

        {race.sessions.map((session: any, index: number) => (

          <div
            key={index}
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            flex
            items-center
            justify-between
            hover:border-red-500/40
            transition
            "
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
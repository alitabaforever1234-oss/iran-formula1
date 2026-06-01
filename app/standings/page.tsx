import { supabase } from "@/lib/supabase"

export default async function StandingsPage() {

  const { data: standings } = await supabase
    .from("driver_standings")
    .select("*")

  const { data: constructors } = await supabase
    .from("constructor_standings")
    .select("*")

  const teamColors: any = {

    "مرسدس": "bg-cyan-400/20",

    "فراری": "bg-red-500/20",

    "مک‌لارن": "bg-orange-400/20",

    "ردبول": "bg-blue-500/20",

    "استون مارتین": "bg-green-500/20",

    "الپین": "bg-pink-400/20",

    "ویلیامز": "bg-blue-300/20",

    "هاس": "bg-white/10",

    "آئودی": "bg-rose-300/20",

    "کادیلاک": "bg-gray-400/20",

    "ریسینگ بولز": "bg-indigo-400/20",

  }

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      {/* Driver Standings */}

      <h1 className="text-5xl font-black mb-12">
        جدول رانندگان
      </h1>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="bg-white/10 text-right">

            <tr>

              <th className="p-6">رتبه</th>
              <th className="p-6">راننده</th>
              <th className="p-6">تیم</th>
              <th className="p-6">برد</th>
              <th className="p-6">سکو</th>
              <th className="p-6">امتیاز</th>

            </tr>

          </thead>

          <tbody>

            {standings?.map((driver) => (

              <tr
                key={driver.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >

                <td className="p-6 text-red-500 font-black">
                  {driver.position.toLocaleString("fa-IR")}
                </td>

                <td className="p-6">

                  <div
                    className={`inline-block px-4 py-2 rounded-2xl font-bold ${teamColors[driver.team]}`}
                  >

                    {driver.driver_name}

                  </div>

                </td>

                <td className="p-6">

                  <div
                    className={`inline-block px-4 py-2 rounded-2xl ${teamColors[driver.team]}`}
                  >

                    {driver.team}

                  </div>

                </td>

                <td className="p-6">
                  {driver.wins.toLocaleString("fa-IR")}
                </td>

                <td className="p-6">
                  {driver.podiums.toLocaleString("fa-IR")}
                </td>

                <td className="p-6 text-2xl font-black">
                  {driver.points.toLocaleString("fa-IR")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Constructor Standings */}

      <h2 className="text-5xl font-black mt-24 mb-12">
        جدول سازندگان
      </h2>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="bg-white/10 text-right">

            <tr>

              <th className="p-6">رتبه</th>
              <th className="p-6">تیم</th>
              <th className="p-6">برد</th>
              <th className="p-6">سکو</th>
              <th className="p-6">امتیاز</th>

            </tr>

          </thead>

          <tbody>

            {constructors?.map((team) => (

              <tr
                key={team.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >

                <td className="p-6 text-red-500 font-black">
                  {team.position.toLocaleString("fa-IR")}
                </td>

                <td className="p-6">

                  <div
                    className={`inline-block px-4 py-2 rounded-2xl font-bold text-xl ${teamColors[team.team_name]}`}
                  >

                    {team.team_name}

                  </div>

                </td>

                <td className="p-6">
                  {team.wins.toLocaleString("fa-IR")}
                </td>

                <td className="p-6">
                  {team.podiums.toLocaleString("fa-IR")}
                </td>

                <td className="p-6 text-2xl font-black">
                  {team.points.toLocaleString("fa-IR")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}

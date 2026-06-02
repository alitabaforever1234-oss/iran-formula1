import { supabase } from "@/lib/supabase"

export default async function StandingsPage() {

  const { data: standings } = await supabase
    .from("driver_standings")
    .select("*")

  const { data: constructors } = await supabase
    .from("constructor_standings")
    .select("*")

  const teamColors: any = {

    "مرسدس": "bg-[#00D2BE]", "فراری": "bg-[#DC0000]", "مک‌لارن": "bg-[#FF8700]", "ردبول": "bg-[#0600EF]", "استون مارتین": "bg-[#006F62]", "الپین": "bg-[#FF87BC]", "ویلیامز": "bg-[#005AFF]", "هاس": "bg-[#B6BABD]", "آئودی": "bg-[#9c2931]", "کادیلاک": "bg-[#9FA3A6]", "ریسینگ بولز": "bg-[#6692FF]",

  }

  const textColors: any = {

    "مرسدس": "bg-[#00D2BE]", "فراری": "bg-[#DC0000]", "مک‌لارن": "bg-[#FF8700]", "ردبول": "bg-[#0600EF]", "استون مارتین": "bg-[#006F62]", "الپین": "bg-[#FF87BC]", "ویلیامز": "bg-[#005AFF]", "هاس": "bg-[#B6BABD]", "آئودی": "bg-[#9c2931]", "کادیلاک": "bg-[#9FA3A6]", "ریسینگ بولز": "bg-[#6692FF]",

  }

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      {/* Driver Standings */}

      <h1 className="text-5xl font-black mb-12">
        جدول رانندگان
      </h1>

      <div
        className="
        overflow-hidden
        rounded-[36px]
        border
        border-white/15
        bg-white/[0.03]
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
        "
      >

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
                className={`
                ${teamColors[driver.team]}
                ${textColors[driver.team]}
                border-t
                ${textColors[driver.team] === "text-black"
                  ? "border-black/20"
                  : "border-white/20"}
                hover:brightness-125
                transition
                `}
              >

                <td className={`p-6 font-black ${textColors[driver.team]}`}>
                  {driver.position.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 font-bold ${textColors[driver.team]}`}>
                  {driver.driver_name}
                </td>

                <td className={`p-6 ${textColors[driver.team]}`}>
                  {driver.team}
                </td>

                <td className={`p-6 ${textColors[driver.team]}`}>
                  {driver.wins.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 ${textColors[driver.team]}`}>
                  {driver.podiums.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 text-2xl font-black ${textColors[driver.team]}`}>
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

      <div
        className="
        overflow-hidden
        rounded-[36px]
        border
        border-white/15
        bg-white/[0.03]
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
        "
      >

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
                className={`
                ${teamColors[team.team_name]}
                ${textColors[team.team_name]}
                border-t
                ${textColors[team.team_name] === "text-black"
                  ? "border-black/20"
                  : "border-white/20"}
                hover:brightness-125
                transition
                `}
              >

                <td className={`p-6 font-black ${textColors[team.team_name]}`}>
                  {team.position.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 font-bold text-xl ${textColors[team.team_name]}`}>
                  {team.team_name}
                </td>

                <td className={`p-6 ${textColors[team.team_name]}`}>
                  {team.wins.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 ${textColors[team.team_name]}`}>
                  {team.podiums.toLocaleString("fa-IR")}
                </td>

                <td className={`p-6 text-2xl font-black ${textColors[team.team_name]}`}>
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
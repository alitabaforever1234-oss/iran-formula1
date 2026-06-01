import { supabase } from "@/lib/supabase"

export default async function StandingsPage() {

  const { data: standings } = await supabase
    .from("driver_standings")
    .select("*")

  const { data: constructors } = await supabase
    .from("constructor_standings")
    .select("*")

  const teamColors: any = {

    "مرسدس": "bg-[#03fce3]",

    "فراری": "bg-[#fc1403]",

    "مکلارن": "bg-[#fcc203]",

    "ردبول": "bg-[#0c038c]",

    "استون مارتین": "bg-[#026607]",

    "الپین": "bg-[#c706ad]",

    "ویلیامز": "bg-[#1b8ee0]",

    "هاس": "bg-[#0a0606]",

    "آئودی": "bg-[#730101]",

    "کادیلاک": "bg-[#8c8c8c]",

    "ریسینگ بولز": "bg-[#54508f]",

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
                className={`${teamColors[driver.team]} border-t border-white/10 hover:brightness-125 transition`}
              >

                <td className="p-6 text-red-500 font-black">
                  {driver.position.toLocaleString("fa-IR")}
                </td>

                <td className="p-6 font-bold">
                  {driver.driver_name}
                </td>

                <td className="p-6">
                  {driver.team}
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
                className={`${teamColors[team.team_name]} border-t border-white/10 hover:brightness-125 transition`}
              >

                <td className="p-6 text-red-500 font-black">
                  {team.position.toLocaleString("fa-IR")}
                </td>

                <td className="p-6 font-bold text-xl">
                  {team.team_name}
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
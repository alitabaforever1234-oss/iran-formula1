import { supabase } from "@/lib/supabase"

export default async function StandingsPage() {

  const { data: standings } = await supabase
    .from("driver_standings")
    .select("*")
    
  const { data: constructors } = await supabase
    .from("constructor_standings")
    .select("*")

const teamColors: any = {

  "مرسدس": "text-cyan-400",

  "فراری": "text-red-500",

  "مکلارن": "text-orange-400",

  "ردبول": "text-blue-500",

  "استون مارتین": "text-green-500",

  "الیپن": "text-pink-400",

  "ویلیامز": "text-blue-300",

  "هاس": "text-white",

  "آئودی": "text-rose-300",

  "کادیلاک": "text-gray-300",

  "ریسینگ بولز": "text-indigo-400",

}



  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

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

                <td
                  className={`p-6 font-bold ${teamColors[driver.team]}`}
                >
                  {driver.driver_name}
                </td>

                <td
                  className={`p-6 ${teamColors[driver.team]}`}
                >
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
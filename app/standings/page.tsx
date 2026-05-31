import { supabase } from "@/lib/supabase"

export default async function StandingsPage() {

  const { data: standings } = await supabase
    .from("driver_standings")
    .select("*")
    .order("position", { ascending: true })

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
                  {driver.position}
                </td>

                <td className="p-6 font-bold">
                  {driver.driver_name}
                </td>

                <td className="p-6 text-gray-300">
                  {driver.team}
                </td>

                <td className="p-6">
                  {driver.wins}
                </td>

                <td className="p-6">
                  {driver.podiums}
                </td>

                <td className="p-6 text-2xl font-black">
                  {driver.points}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}
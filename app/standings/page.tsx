export default function StandingsPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-black text-red-500">
        جدول رانندگان
      </h1>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

        <table className="w-full text-right">

          <thead className="bg-white/10">
            <tr>
              <th className="p-5">رتبه</th>
              <th className="p-5">راننده</th>
              <th className="p-5">تیم</th>
              <th className="p-5">امتیاز</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t border-white/10">
              <td className="p-5">1</td>
              <td className="p-5">مکس ورشتپن</td>
              <td className="p-5">ردبول</td>
              <td className="p-5 text-red-500 font-bold">331</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-5">2</td>
              <td className="p-5">لندو نوریس</td>
              <td className="p-5">مک‌لارن</td>
              <td className="p-5 text-red-500 font-bold">287</td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  )
}
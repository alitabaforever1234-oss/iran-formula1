export default function SchedulePage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-black text-red-500">
        برنامه مسابقات
      </h1>

      <div className="mt-10 grid gap-6">

        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            گرندپری ایتالیا
          </h2>

          <p className="mt-2 text-gray-400">
            ۱۷ شهریور ۱۴۰۴
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            گرندپری سنگاپور
          </h2>

          <p className="mt-2 text-gray-400">
            ۳۱ شهریور ۱۴۰۴
          </p>
        </div>

      </div>
    </div>
  )
}
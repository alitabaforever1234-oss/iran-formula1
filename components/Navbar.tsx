import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#071B3A]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black">
            F1
          </div>

          <div>
            <h1 className="text-xl font-black">
              Iran Formula 1
            </h1>

            <p className="text-xs text-gray-400">
              مرجع فارسی فرمول ۱
            </p>
          </div>

        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-bold">

          <Link
            href="/"
            className="hover:text-red-500 transition"
          >
            خانه
          </Link>

          <Link
            href="/news"
            className="hover:text-red-500 transition"
          >
            اخبار
          </Link>

          <Link
            href="/schedule"
            className="hover:text-red-500 transition"
          >
            مسابقات
          </Link>

          <Link
            href="/standings"
            className="hover:text-red-500 transition"
          >
            جدول
          </Link>

        </div>

      </div>

    </nav>
  )
}
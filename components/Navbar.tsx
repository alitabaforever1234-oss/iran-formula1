"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState("");

  useEffect(() => {

    const getUser = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (user) {

        const { data } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (data) {
          setRole(data.role);
        }
      }

      if (user) {

  const { data } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single()

  if (data) {
    setUsername(data.username)
  }

}

    };

    getUser();

  }, []);

  

  const handleLogout = async () => {

    await supabase.auth.signOut();

    location.reload();
  };

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

          {!user && (
            <>
              <Link
                href="/login"
                className="bg-red-600 px-5 py-2 rounded-xl hover:bg-red-700 transition"
              >
                ورود
              </Link>

              <Link
                href="/signup"
                className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition"
              >
                ثبت نام
              </Link>
            </>
          )}

          {
  user ? (

    <div className="flex items-center gap-4">

      <span className="text-white font-bold">
        سلام {username}
      </span>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
      >
        خروج
      </button>

    </div>

  ) : (

    <Link
      href="/login"
      className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold"
    >
      ورود / ثبت نام
    </Link>

  )
}

        </div>

      </div>

    </nav>
  );
}
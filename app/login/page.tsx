"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert("خطا در ورود")
      console.log(error)
    } else {
      alert("ورود موفق")
    }

  }

  async function handleSignup() {

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert("خطا در ثبت نام")
      console.log(error)
    } else {
      alert("ثبت نام موفق")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center p-10">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8">

        <h1 className="text-4xl font-black text-red-500">
          ورود ادمین
        </h1>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-red-500"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-red-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-black"
          >
            ورود
          </button>

          <button
            onClick={handleSignup}
            className="w-full border border-white/10 hover:border-red-500 transition py-4 rounded-2xl font-black"
          >
            ثبت نام
          </button>

        </div>

      </div>

    </div>

  )

}
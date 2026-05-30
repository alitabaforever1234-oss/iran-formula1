"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          email: data.user.email,
          role: "user",
        },
      ]);

      alert("اکانت ساخته شد");

      router.push("/login");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-white/5 p-8 rounded-3xl">

        <h1 className="text-4xl font-black mb-8 text-center">
          Sign Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-xl bg-black border border-white/10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-xl bg-black border border-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}
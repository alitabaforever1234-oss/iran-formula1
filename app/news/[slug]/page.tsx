"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"

export default function SingleNewsPage({
  params,
}: {
  params: { slug: string }
}) {

  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [comment, setComment] = useState("")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {

    const fetchPost = async () => {

      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", params.slug)
        .single()

      if (!data) {
        notFound()
        return
      }

      setPost(data)

      const { data: commentsData } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", data.id)
        .order("created_at", { ascending: false })

      if (commentsData) {
        setComments(commentsData)
      }

    }

    const getUser = async () => {

      const { data } = await supabase.auth.getUser()

      setUser(data.user)

    }

    fetchPost()
    getUser()

  }, [])

  async function addComment() {

    if (!comment.trim()) return

    if (!user) {
      alert("اول لاگین کن")
      return
    }

    const { error } = await supabase
      .from("comments")
      .insert([
        {
          post_id: post.id,
          user_id: user.id,
          content: comment,
        },
      ])

    if (!error) {

      setComments([
        {
          id: Math.random(),
          content: comment,
        },
        ...comments,
      ])

      setComment("")

    }

  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    )
  }

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <div className="max-w-4xl mx-auto">

        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-[500px] object-cover rounded-3xl mb-10"
          />
        )}

        <div className="inline-block bg-red-600 px-4 py-2 rounded-full text-sm mb-6">
          {post.category}
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-gray-400">
          {new Date(post.created_at).toLocaleDateString("fa-IR")}
        </p>

        <div className="mt-12 text-xl leading-loose text-gray-200">
          {post.description}
        </div>

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            کامنت‌ها
          </h2>

          <div className="flex gap-4 mb-8">

            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="کامنت بنویس..."
              className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3"
            />

            <button
              onClick={addComment}
              className="bg-red-600 hover:bg-red-700 px-6 rounded-xl"
            >
              ارسال
            </button>

          </div>

          <div className="space-y-4">

            {comments.map((item) => (

              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4"
              >

                <p className="text-white">
                  {item.content}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )

}
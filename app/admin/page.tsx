"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {

  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [posts, setPosts] = useState<any[]>([])
  const [slug, setSlug] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  async function handlePublish() {

    const { error } = await supabase
      .from("posts")
      .insert([
        {
          title,
          description,
          category,
          slug,
          image_url: imageUrl,
        },
      ])

    if (error) {
      console.log(error)
      alert("خطا در انتشار خبر")
    } else {
      alert("خبر منتشر شد ")

      setTitle("")
      setDescription("")
      setCategory("")
    }

  }

  async function fetchPosts() {

  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (data) {
    setPosts(data)
  }

}

useEffect(() => {

  async function checkAdmin() {

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.push("/login")
      return
    }

    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (data?.role !== "admin") {
      router.push("/")
      return
    }

    await fetchPosts()

    setLoading(false)
  }

  checkAdmin()

}, [])

async function deletePost(id: number) {

  const confirmed = confirm("حذف شود؟")

  if (!confirmed) return

  const { error } = await supabase
    .from("posts")
    .delete()
    .match({ id: id })

  console.log(error)

  fetchPosts()

}

  function editPost(post: any) {

  setEditingId(post.id)

  setTitle(post.title)
  setDescription(post.description)
  setCategory(post.category)
  setSlug(post.slug)
  setImageUrl(post.image_url)

}

async function updatePost() {

  const { error } = await supabase
    .from("posts")
    .update({
      title,
      description,
      category,
      slug,
      image_url: imageUrl,
    })
    .eq("id", editingId)

  if (!error) {

    alert("خبر آپدیت شد 😄")

    setEditingId(null)

    setTitle("")
    setDescription("")
    setCategory("")
    setSlug("")
    setImageUrl("")

    fetchPosts()

  }

}

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      در حال بررسی...
    </div>
  )
}

  return (

    <div className="min-h-screen p-10 text-white">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black text-red-500">
          پنل مدیریت
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          ایجاد خبر جدید
        </p>

        <div className="mt-10 space-y-6">

          {/* Title */}
          <input
            type="text"
            placeholder="عنوان خبر"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
          />

          {/* Category */}
          <input
            type="text"
            placeholder="دسته بندی"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
          />

          <input
              type="text"
              placeholder="slug مثال: verstappen-monaco"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
            />

          <input
             type="text"
             placeholder="لینک عکس"
             value={imageUrl}
             onChange={(e) => setImageUrl(e.target.value)}
             className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
            />

          {/* Description */}
          <textarea
            placeholder="متن خبر"
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
          />

          {/* Button */}
         <button
  type="button"
  onClick={editingId ? updatePost : handlePublish}
  className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-black"
>
  {editingId ? "آپدیت خبر" : "انتشار خبر"}
</button>

          <div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    مدیریت اخبار
  </h2>

  <div className="space-y-6">

    {posts.map((post) => (

      <div
        key={post.id}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between"
      >

        <div>
          <h3 className="text-xl font-bold">
            {post.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {post.category}
          </p>
        </div>

        <button
           type="button"
           onClick={() => deletePost(post.id)}
           className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
          > 
           حذف
        </button>

        <button
        type="button"
        onClick={() => editPost(post)}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl mr-4"
        >
             ادیت
        </button>

      </div>

    ))}

  </div>

</div>

        </div>

      </div>

    </div>

  )

}
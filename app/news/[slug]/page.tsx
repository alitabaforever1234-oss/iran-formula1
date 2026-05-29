import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"

export default async function SingleNewsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!post) {
    notFound()
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

      </div>

    </div>
  )
}
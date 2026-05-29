import NewsCard from "@/components/NewsCard"
import { supabase } from "@/lib/supabase"

export default async function NewsPage() {

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <div className="mb-14">

        <h1 className="text-6xl font-black text-red-500">
          اخبار فرمول ۱
        </h1>

        <p className="mt-4 text-gray-400 text-xl">
          آخرین اخبار و تحلیل‌های دنیای فرمول ۱
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {posts?.map((post) => (

          <NewsCard
            key={post.id}
            category={post.category}
            title={post.title}
            description={post.description}
          />

        ))}

      </div>

    </div>

  )

}
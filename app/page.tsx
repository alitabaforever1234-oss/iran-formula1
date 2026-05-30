import NewsCard from "@/components/NewsCard"
import { supabase } from "@/lib/supabase"

export default async function HomePage() {

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })

  return (

    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="px-8 md:px-16 py-24">

        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-8">

            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>

            پوشش زنده فرمول ۱ به زبان فارسی

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">

            سرعت.
            <br />
            هیجان.
            <br />

            <span className="text-red-500">
              فرمول ۱
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-loose max-w-2xl">

            آخرین اخبار، نتایج مسابقات و تحلیل‌های دنیای فرمول ۱

          </p>

        </div>

      </section>

      {/* News */}
      <section className="px-8 md:px-16 pb-20">

        <h2 className="text-4xl font-black mb-10">
          آخرین اخبار
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {posts?.map((post) => (

            <NewsCard
              key={post.id}
              category={post.category}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />

          ))}

        </div>

      </section>

    </div>

  )

}
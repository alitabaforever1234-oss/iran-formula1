import Link from "next/link";

type NewsCardProps = {
  title: string
  description: string
  category: string
  slug: string
}

export default function NewsCard({
  title,
  description,
  category,
  slug,
}: NewsCardProps) {

  return (

    <Link href={`/news/${slug}`}>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/40 transition duration-300 hover:-translate-y-1">

        <div className="h-52 bg-gradient-to-br from-red-600 to-black"></div>

        <div className="p-6">

          <span className="text-sm text-red-500 font-bold">
            {category}
          </span>

          <h3 className="mt-4 text-2xl font-bold leading-relaxed">
            {title}
          </h3>

          <p className="mt-4 text-gray-400 leading-loose">
            {description}
          </p>

        </div>

      </div>

    </Link>

  )
}
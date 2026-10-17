import { ArrowLeft, Clock3 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import useSEO from '../hooks/useSEO'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  useSEO(
    post ? `${post.title} | Frame Theory Socials` : 'Article not found | Frame Theory Socials',
    post?.excerpt || 'Explore practical ideas from Frame Theory Socials.',
  )

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article>
      <header className="container-x pb-12 pt-36 sm:pb-16 sm:pt-44">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-ink/65 transition hover:text-violet">
          <ArrowLeft size={16} aria-hidden /> Back to all articles
        </Link>
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet">{post.category}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/55">
            <span>Frame Theory Team</span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 size={15} aria-hidden />{post.readTime}</span>
          </div>
        </div>
      </header>
      <div className="container-x">
        <img src={post.image} alt={post.imageAlt} className="mx-auto max-h-[560px] w-full max-w-5xl rounded-[2rem] object-cover" />
      </div>
      <div className="container-x py-12 sm:py-16">
        <div className="prose-copy mx-auto max-w-3xl">
          {post.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-[1.9] text-ink/75">{paragraph}</p>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl border-t border-ink/10 pt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-violet transition hover:gap-3">
            <ArrowLeft size={17} aria-hidden /> More from the journal
          </Link>
        </div>
      </div>
    </article>
  )
}

import { useParams, Link } from "react-router-dom";
import { blogYears } from "../content/blog";

export default function BlogPost() {
  const { year, slug } = useParams();

  const y = blogYears.find((b) => b.year === year);
  const post = y?.posts.find((p) => p.slug === slug);

  if (!y || !post) {
    return (
      <div className="py-10">
        <p>記事が見つかりませんでした。</p>
        <Link className="text-slate-900 underline" to="/blog">
          アーカイブへ
        </Link>
      </div>
    );
  }

  return (
    <article className="py-10">
      <div className="flex gap-3 text-sm">
        <Link className="text-slate-700 hover:underline" to="/blog">
          Archive
        </Link>
        <span className="text-slate-400">/</span>
        <Link className="text-slate-700 hover:underline" to={`/blog/${y.year}`}>
          {y.title}
        </Link>
      </div>

      <h1 className="mt-3 text-2xl md:text-3xl font-semibold">{post.title}</h1>
      <div className="mt-2 text-sm text-slate-500">{post.date}</div>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="mt-6 h-72 w-full rounded-3xl object-cover"
        />
      )}

      <div className="prose prose-slate mt-8 max-w-none whitespace-pre-wrap">
        {post.body}
      </div>
    </article>
  );
}
import { useParams, Link } from "react-router-dom";
import { blogYears } from "../content/blog";

export default function BlogYear() {
  const { year } = useParams();
  const item = blogYears.find((y) => y.year === year);

  if (!item) {
    return (
      <div className="py-10">
        <p>ページが見つかりませんでした。</p>
        <Link className="text-slate-900 underline" to="/blog">
          アーカイブへ
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <Link className="text-sm text-slate-700 hover:underline" to="/blog">
        ← Archive
      </Link>

      <h1 className="mt-3 text-2xl md:text-3xl font-semibold">{item.title}</h1>
      <div className="mt-1 text-sm text-slate-500">{item.year}</div>

      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="mt-6 h-64 w-full rounded-3xl object-cover"
        />
      )}

      <p className="mt-6 text-slate-700">{item.excerpt}</p>

      <h2 className="mt-10 text-xl font-semibold">Posts</h2>
      <div className="mt-4 space-y-3">
        {item.posts.map((p) => (
          <div key={p.slug} className="rounded-2xl border p-4">
            <div className="text-sm text-slate-500">{p.date}</div>
            <div className="font-semibold">{p.title}</div>
            <div className="mt-2 whitespace-pre-wrap text-sm text-slate-700">
              {p.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
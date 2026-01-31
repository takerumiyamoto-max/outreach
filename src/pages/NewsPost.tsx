import { useParams, Link } from "react-router-dom";
import { news } from "../content/news";

export default function NewsPost() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="py-10">
        <p>記事が見つかりませんでした。</p>
        <Link className="text-slate-900 underline" to="/news">
          ニュース一覧へ
        </Link>
      </div>
    );
  }

  return (
    <article className="py-10">
      <Link className="text-sm text-slate-700 hover:underline" to="/news">
        ← News一覧
      </Link>

      <h1 className="mt-3 text-2xl md:text-3xl font-semibold">{item.title}</h1>
      <div className="mt-2 text-sm text-slate-500">{item.date}</div>

      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="mt-6 h-64 w-full rounded-3xl object-cover"
        />
      )}

      <div className="prose prose-slate mt-8 max-w-none whitespace-pre-wrap">
        {item.body}
      </div>
    </article>
  );
}
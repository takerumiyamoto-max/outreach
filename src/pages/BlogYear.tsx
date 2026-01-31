import { useParams, Link } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import type { CardItem } from "../components/CardGrid";
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

  const postCards = item.posts.map(
    (p) =>
      ({
        title: p.title,
        description: p.excerpt,     // 冒頭数文
        meta: p.date,              // 更新日
        to: `/blog/${item.year}/${p.slug}`, // クリックで個別記事へ
        imageUrl: p.imageUrl,      // サムネ
      }) satisfies CardItem
  );

  return (
    <div className="py-10">
      <Link className="text-sm text-slate-700 hover:underline" to="/blog">
        ← Archive
      </Link>

      <h1 className="mt-3 text-2xl md:text-3xl font-semibold">{item.title}</h1>
      <div className="mt-1 text-sm text-slate-500">{item.year}</div>

      <p className="mt-6 text-slate-700">{item.excerpt}</p>

      <h2 className="mt-10 text-xl font-semibold">Posts</h2>
      <div className="mt-6">
        <CardGrid items={postCards} />
      </div>
    </div>
  );
}
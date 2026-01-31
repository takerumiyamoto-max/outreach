import CardGrid from "../components/CardGrid";
import type { CardItem } from "../components/CardGrid";
import { blogYears } from "../content/blog";
import { Link } from "react-router-dom";

export default function BlogArchive() {
  const items: CardItem[] = blogYears.map((y) => ({
    title: y.title,
    description: y.excerpt,
    meta: y.year,
    to: `/blog/${y.year}`,
    imageUrl: y.imageUrl,
  }));

  return (
    <div className="py-10">
      <Link className="text-sm text-slate-700 hover:underline" to="/">
        ← Home
      </Link>
      <h1 className="text-2xl font-semibold">Blog Archive</h1>
      <p className="mt-2 text-sm text-slate-600">各派遣団の活動報告ブログはこちら。</p>
      <div className="mt-6">
        <CardGrid items={items} />
      </div>
    </div>
  );
}
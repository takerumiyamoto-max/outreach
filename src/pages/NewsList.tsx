import CardGrid from "../components/CardGrid";
import type { CardItem } from "../components/CardGrid";
import { news } from "../content/news";

export default function NewsList() {
  const items: CardItem[] = news.map((n) => ({
    title: n.title,
    description: n.excerpt,
    meta: n.date,
    to: `/news/${n.slug}`,
    imageUrl: n.imageUrl,
  }));

  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold">Recent News</h1>
      <p className="mt-2 text-sm text-slate-600">最新ニュース一覧</p>
      <div className="mt-6">
        <CardGrid items={items} />
      </div>
    </div>
  );
}
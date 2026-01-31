import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import type { CardItem } from "../components/CardGrid";
import { news } from "../content/news";
import { blogYears } from "../content/blog";

export default function Home() {
  const newsCards: CardItem[] = news.slice(0, 6).map((n) => ({
    title: n.title,
    description: n.excerpt,
    meta: n.date,
    to: `/news/${n.slug}`,
    imageUrl: n.imageUrl,
  }));

  const blogCards: CardItem[] = blogYears.map((y) => ({
    title: y.title,
    description: y.excerpt,
    meta: y.year,
    to: `/blog/${y.year}`,
    imageUrl: y.imageUrl,
  }));

  return (
    <div className="pb-16">
      <Hero />

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">News</h2>
          <a className="text-sm text-slate-700 hover:underline" href="/news">
            すべて見る
          </a>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          最新のお知らせ。
        </p>
        <div className="mt-6">
          <CardGrid items={newsCards} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Blog</h2>
        <p className="mt-2 text-sm text-slate-600">
          各派遣団の活動報告ブログはこちら。
        </p>
        <div className="mt-6">
          <CardGrid items={blogCards} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-sm text-slate-600">
          お問い合わせフォームへ移動します。
        </p>

        <div className="mt-6">
          <div className="rounded-3xl border p-6">
            <div className="text-slate-700">お問い合わせはこちらのフォームからどうぞ。</div>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
            >
              Contact ページへ →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
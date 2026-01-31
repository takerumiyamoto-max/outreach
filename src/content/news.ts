export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  imageUrl?: string;
};

export const news: NewsItem[] = [
  {
    slug: "kickoff",
    title: "サイト公開のお知らせ",
    date: "2026-01-31",
    excerpt: "Netlifyで公開、ニュースとブログを順次追加していきます。",
    body: "ここがニュース本文です。\n\n- 箇条書きもOK\n- 後でMarkdown対応にもできます。",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];
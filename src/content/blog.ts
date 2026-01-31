export type BlogYearItem = {
  year: string;
  title: string; // 例：「第一期派遣団」
  excerpt: string;
  posts: { slug: string; title: string; date: string; body: string }[];
  imageUrl?: string;
};

export const blogYears: BlogYearItem[] = [
  {
    year: "2025",
    title: "第一期派遣団",
    excerpt: "第一期派遣団の記録。記事を追加していく想定です。",
    imageUrl:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80",
    posts: [
      { slug: "day-1", title: "出発〜到着", date: "2025-08-01", body: "本文サンプル" },
      { slug: "day-2", title: "現地活動1日目", date: "2025-08-02", body: "本文サンプル" },
    ],
  },
];
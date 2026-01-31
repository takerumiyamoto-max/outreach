import newsPicture1 from "../assets/news/news.jpg";

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
    title: "公式Webサイト開設のお知らせ",
    date: "2026-02-01",
    excerpt: "ニュースとブログを順次追加していきます。",
    body: "初めまして、鉄門国際医療研究会Outreachです。本日2026年2月1日にWebページを開設いたしました。活動報告などを行なっていきます！",
    imageUrl: newsPicture1
  },
];
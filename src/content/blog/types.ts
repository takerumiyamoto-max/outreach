export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  imageUrl?: string;
};

export type BlogCohort = {
  year: string;   // "2025"
  title: string;  // "第一期派遣団"
  excerpt: string;
  imageUrl?: string;
  posts: BlogPost[];
};
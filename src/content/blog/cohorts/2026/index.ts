import type { BlogCohort } from "../../types";
import day1 from "./posts/day-1";
import day2 from "./posts/day-2";

export const cohort2026: BlogCohort = {
  year: "2026",
  title: "第1期派遣団",
  excerpt: "第一期派遣団の記録。",
  posts: [day1, day2]
    // 日付降順にしたいならこれ
    .sort((a, b) => (a.date < b.date ? 1 : -1)),
};
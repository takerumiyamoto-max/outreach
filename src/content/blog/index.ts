import type { BlogCohort } from "./types";
import { cohort2026 } from "./cohorts/2026";
// import { cohort2027 } from "./cohorts/2027";

export const blogYears: BlogCohort[] = [
  cohort2026,
  // cohort2026,
].sort((a, b) => (a.year < b.year ? 1 : -1));

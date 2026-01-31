import type { BlogCohort } from "./types";
import { cohort2025 } from "./cohorts/2025";
// import { cohort2026 } from "./cohorts/2026";

export const blogYears: BlogCohort[] = [
  cohort2025,
  // cohort2026,
].sort((a, b) => (a.year < b.year ? 1 : -1));

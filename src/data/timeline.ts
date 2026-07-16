// ============================================================================
// TIMELINE DATA, combined education + work timeline shown on the About
// page. This is separate from experience.ts (which powers the detailed
// Experience page cards) so the About page can show a compact, mixed
// chronological view including school milestones.
//
// HOW TO EDIT: add/remove/reorder objects below. `type` controls the icon
// and color used for that entry ("education" or "work").
// ============================================================================

export type TimelineEntry = {
  type: "education" | "work";
  title: string;
  organization: string;
  dateRange: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    type: "education",
    title: "Bachelor of Engineering, Mechanical Engineering",
    organization: "University of Victoria",
    dateRange: "Sep 2021 – Apr 2026",
    description:
      "Specialization in Thermo-Fluids and Aerodynamics, with a completed minor in business. Enrolled in the co-op program, graduated with a 3.5/4.0 GPA.",
  },
  {
    type: "work",
    title: "Intern EH&S Engineer",
    organization: "Ovintiv",
    dateRange: "May 2025 – Aug 2025",
    description:
      "Recalculated Emergency Planning Zones for sour gas pipelines using AERH2S software and built a standardized recalculation workflow.",
  },
  {
    type: "work",
    title: "Methods Engineer Co-op Student",
    organization: "De Havilland Aircraft of Canada",
    dateRange: "Sep 2023 – Dec 2023",
    description:
      "Digitized aircraft parts in CAD within the methods engineering group, working to strict aerospace quality requirements.",
  },
  {
    type: "work",
    title: "Mechanical Engineering Intern",
    organization: "Stantec Consulting Ltd.",
    dateRange: "Apr 2022 – Aug 2022, Apr 2023 – Aug 2023",
    description:
      "Supported the buildings mechanical group across two work terms, designing ventilation, plumbing, and piping systems alongside architects and engineers.",
  },
];

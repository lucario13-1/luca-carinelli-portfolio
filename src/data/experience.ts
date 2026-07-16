// ============================================================================
// EXPERIENCE DATA, powers the Experience page (one card per job) and the
// work-history portion of the About page timeline.
//
// HOW TO EDIT: copy an object below to add a role, delete one to remove it,
// or reorder the array (most recent first is the convention used here).
// `logo` is a path under /public/images/logos/, leave it "" to show a
// clean placeholder until you have a real logo file. `dates` is a plain
// string so a role with multiple terms (like a co-op with two work terms
// at the same company) can list both, e.g. "Apr 2022 – Aug 2022, Apr 2023 – Aug 2023".
// ============================================================================

export type ExperienceEntry = {
  company: string;
  logo: string;
  position: string;
  location: string;
  dates: string;
  description: string;
  accomplishments: string[];
  skills: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ovintiv",
    logo: "/images/logos/ovintiv.png",
    position: "Intern EH&S Engineer",
    location: "Calgary, AB",
    dates: "May 2025 – Aug 2025",
    description:
      "Supported the Environmental, Health & Safety engineering team on emergency planning for sour gas pipeline infrastructure.",
    accomplishments: [
      "Recalculated Emergency Planning Zones (EPZs) for sour gas pipelines using AERH2S software.",
      "Developed a standardized workflow and documentation package for future EPZ recalculation projects.",
      "Improved project efficiency by creating a master Excel tracking system for 500+ pipeline segments.",
    ],
    skills: ["AERH2S", "Emergency planning", "Excel", "Process documentation"],
  },
  {
    company: "De Havilland Aircraft of Canada",
    logo: "/images/logos/dehavilland.png",
    position: "Methods Engineer Co-op Student",
    location: "Victoria, BC",
    dates: "Sep 2023 – Dec 2023",
    description:
      "Supported the methods engineering group on aircraft parts digitization within a heavily team-oriented, quality-driven aerospace environment.",
    accomplishments: [
      "Supported the methods group by digitizing 200+ aircraft parts in CAD.",
      "Worked in a heavily team-oriented environment across the methods group.",
      "Learned and adhered to strict quality requirements to ensure high standards were met.",
    ],
    skills: ["CAD digitization", "Aerospace quality standards", "Team collaboration"],
  },
  {
    company: "Stantec Consulting Ltd.",
    logo: "/images/logos/stantec.png",
    position: "Mechanical Engineering Intern",
    location: "Calgary, AB",
    dates: "Apr 2022 – Aug 2022, Apr 2023 – Aug 2023",
    description:
      "Supported the mechanical engineering buildings group across two work terms, designing building systems alongside architects and senior engineers.",
    accomplishments: [
      "Supported the mechanical engineering team for the buildings group across various tasks and project work.",
      "Collaborated with architects and engineers to design projects for clients.",
      "Learned the essentials of AutoCAD and Revit, and used them to design ventilation, plumbing, and piping for buildings.",
    ],
    skills: ["AutoCAD", "Revit", "HVAC & plumbing design", "Cross-disciplinary collaboration"],
  },
];

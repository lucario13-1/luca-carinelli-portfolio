// ============================================================================
// SKILLS DATA, powers the Skills page. Grouped into categories, each with
// a list of individual skills. `level` is optional (0-100) and drives the
// small proficiency bar shown next to each skill, omit it to hide the bar.
//
// HOW TO EDIT: add/remove a skill from any category's `items` array, or add
// a whole new category object to the `skillCategories` array.
// ============================================================================

export type Skill = { name: string; level?: number };
export type SkillCategory = {
  title: string;
  description: string;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Mechanical Design",
    description: "Turning requirements into manufacturable, load-appropriate geometry.",
    items: [
      { name: "Machine design & power transmission", level: 85 },
      { name: "GD&T", level: 80 },
      { name: "DFM / DFA", level: 80 },
      { name: "Mechanism & linkage design", level: 75 },
      { name: "Sheet metal & weldment design", level: 70 },
    ],
  },
  {
    title: "CAD",
    description: "Daily-driver modeling and drafting tools.",
    items: [
      { name: "SolidWorks", level: 90 },
      { name: "Siemens NX", level: 70 },
      { name: "AutoCAD", level: 75 },
      { name: "Revit", level: 70 },
      { name: "Fusion 360", level: 65 },
    ],
  },
  {
    title: "Manufacturing",
    description: "Getting from CAD to a physical, working part.",
    items: [
      { name: "3D printing (FDM / resin)", level: 85 },
      { name: "Prototype fabrication & assembly", level: 80 },
    ],
  },
  {
    title: "Analysis",
    description: "Verifying a design will actually hold up.",
    items: [
      { name: "Finite element analysis (FEA)", level: 75 },
      { name: "Thermal / fluid analysis", level: 75 },
      { name: "Stress & fatigue calculations", level: 80 },
      { name: "Failure & root-cause analysis", level: 70 },
      { name: "System Advisor Model (SAM)", level: 60 },
    ],
  },
  {
    title: "Programming",
    description: "Enough software to automate analysis and integrate hardware.",
    items: [
      { name: "MATLAB", level: 80 },
      { name: "Java", level: 70 },
      { name: "Basic C", level: 65 },
      { name: "Excel / VBA", level: 80 },
    ],
  },
  {
    title: "Software",
    description: "Supporting tools used day to day.",
    items: [
      { name: "ANSYS", level: 60 },
      { name: "MS Project", level: 65 },
      { name: "Microsoft 365 (Outlook, Teams, and other everyday tools)", level: 90 },
      { name: "Git / GitHub", level: 60 },
      { name: "PDM / version control workflows", level: 65 },
    ],
  },
  {
    title: "Business",
    description: "Grounded in a business minor completed alongside the engineering degree.",
    items: [
      { name: "Financial Accounting" },
      { name: "Managerial Accounting" },
      { name: "Entrepreneurship" },
      { name: "Marketing" },
    ],
  },
  {
    title: "Professional Skills",
    description: "How the technical work actually gets delivered on a team.",
    items: [
      { name: "Technical writing & reporting" },
      { name: "Cross-disciplinary collaboration" },
      { name: "Design reviews & presentations" },
      { name: "Project planning & scheduling" },
    ],
  },
];

// ============================================================================
// SITE CONFIG, this is the one file that controls your name, title,
// location, bio blurbs, social links, and resume file path across the
// entire website. Edit the values below; you should not need to touch any
// component code to update this content.
// ============================================================================

export const site = {
  name: "Luca Carinelli",
  firstName: "Luca",
  title: "Mechanical Engineer",
  location: "Calgary, Alberta",
  email: "carinelliluca@gmail.com",

  // Shown in the browser tab and search engine results.
  siteUrl: "https://lucacarinelli.ca",
  seoTitle: "Luca Carinelli, Mechanical Engineer",
  seoDescription:
    "Mechanical engineer in Calgary, Alberta focused on thermal systems, aerospace hardware, and robotics. Explore project case studies, experience, and background.",

  // One paragraph used in the homepage hero. Keep it to 2-3 sentences,
  // this is the very first thing a recruiter reads.
  heroIntro:
    "I enjoy solving real-world engineering problems and turning ideas into practical solutions. Through internships in aerospace and energy, along with hands-on university design projects, I've developed a strong foundation in mechanical design, analysis, and product development. As a recent Mechanical Engineering graduate from the University of Victoria, I'm excited by opportunities to work on aerospace technologies, energy systems, infrastructure, and thermal engineering, where I can help bring innovative ideas from concept to reality.",

  // Short version used in nav / footer / meta descriptions.
  shortBio:
    "Mechanical engineer based in Calgary, AB, working across thermal systems, aerospace, and robotics.",

  // Social + external links. Set a value to "" to hide that link from the UI.
  links: {
    linkedin: "https://www.linkedin.com/in/lucacarinelli",
    github: "https://github.com/lucacarinelli",
    email: "mailto:carinelliluca@gmail.com",
  },

  // Path to your resume file inside /public. Drop your real PDF at this
  // exact path (see OWNER_GUIDE.md) and both the download button and the
  // embedded viewer on the Resume page will pick it up automatically.
  resumeFile: "/resume/luca-carinelli-resume.pdf",

  // Headline stats shown on the homepage. Update as your career progresses.
  stats: [
    { label: "Projects completed", value: "10+" },
    { label: "Companies worked with", value: "3" },
    { label: "CAD hours logged", value: "1000+" },
  ],

  // "What I'm looking for", shown on the homepage and About page. Gives
  // recruiters a fast, explicit signal of fit instead of making them guess.
  lookingFor: [
    "Aerospace & aircraft systems",
    "Thermal management & energy systems",
    "UAVs & robotics",
    "Oil & gas and infrastructure projects",
    "Industrial automation",
    "Product development teams that build physical hardware",
  ],

  // Current personal-interest/R&D topics, good interview conversation
  // starters that go beyond what fits on a one-page resume.
  currentInterests: [
    {
      title: "Wildfire detection drones",
      description:
        "Thinking through payload and thermal-camera integration for long-endurance fixed-wing UAVs used in early wildfire spotting.",
    },
    {
      title: "Thermal energy storage",
      description:
        "Reading into phase-change and molten-salt storage as a buffer for intermittent renewable generation.",
    },
    {
      title: "Liquid cooling for high-density compute",
      description:
        "Following the shift from air to liquid cooling in data centers, including pump selection, cold plate design, and loop reliability.",
    },
    {
      title: "Additive manufacturing for flight hardware",
      description:
        "Tracking how metal AM is qualified for real aerospace parts, and what that means for design-for-manufacture rules.",
    },
  ],

  // Interest areas shown as a tag grid on the About page. `icon` must match
  // a key exported from lucide-react (see about/interests.tsx).
  interests: [
    { label: "Aerospace", icon: "Plane" },
    { label: "Thermal systems", icon: "Thermometer" },
    { label: "Drones", icon: "Bot" },
    { label: "Robotics", icon: "Cpu" },
    { label: "Energy", icon: "Zap" },
    { label: "Product development", icon: "Wrench" },
  ],

  // "Why engineering" + story blurbs for the About page. Written as
  // separate paragraphs so you can edit one without touching the others.
  about: {
    whoIAm:
      "I've always been curious about how things come together. Not just the finished product, but the thinking, planning, and engineering behind it. As I learned more about the industries that shape everyday life, I found myself drawn to the scale of the problems engineers get to solve. Designing an aircraft, improving an energy facility, or contributing to major infrastructure projects means creating systems that people rely on every day.",
    whyEngineering:
      "That perspective is what led me to mechanical engineering. University gave me the technical foundation, while internships in aerospace and energy showed me how engineering works outside the classroom. Seeing experienced engineers solve practical problems, balance competing constraints, and make decisions that affect real operations confirmed that this is the kind of work I want to be part of.",
  },

  // Primary navigation, in display order.
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

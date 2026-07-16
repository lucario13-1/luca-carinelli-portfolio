// ============================================================================
// PROJECTS DATA, this is the single file that drives the entire Projects
// page and every project modal (case study).
//
// HOW TO EDIT
// -----------
// - To CHANGE a project: edit the fields on its object below.
// - To ADD a project: copy an existing object, paste it into the array,
//   give it a unique `slug`, and fill in the fields.
// - To REMOVE a project: delete its object from the array.
// - To REORDER projects on the grid: change the `order` number (lower = shows
//   first) or simply move the object up/down in the array, order below wins.
// - To FEATURE a project on the homepage: set `featured: true`. You can
//   feature more than one, but 1-2 looks best.
// - `categories` is an array, a project can belong to more than one category
//   and will show up under every filter pill it's tagged with. Add a new
//   category by adding it to the ProjectCategory union type below and using
//   it on any project, it'll automatically show up as a new filter pill.
// - Photos/renders go in /public/images/projects/<slug>/... see
//   OWNER_GUIDE.md → "Adding photos and videos" for the exact steps.
// - `video` accepts a YouTube/Vimeo URL. Leave it as an empty string ""
//   to hide the video tab for that project.
// - `downloads` accepts links to PDFs/reports placed in /public/downloads.
//
// Nothing here needs to be "real" until you're ready, every project below
// is realistic placeholder content so the site works end-to-end today.
// ============================================================================

export type ProjectCategory =
  | "Product & Mechanical Design"
  | "Fluid & Thermal Systems"
  | "Analysis & Simulation"
  | "Mechatronics & Embedded Systems"
  | "Aerospace Engineering";

export type Project = {
  slug: string;
  title: string;
  date: string;
  categories: ProjectCategory[];
  featured: boolean;
  order: number;
  thumbnail: string;
  gallery: string[];
  video?: string;
  tags: string[];
  tools: string[];
  skills: string[];
  overview: string;
  problem: string;
  role: string;
  process: string;
  analysis: string;
  results: string;
  lessons: string;
  downloads?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "smart-surf-buoy",
    title: "Low-Cost Smart Buoy for Near-Shore Wave & Weather Monitoring",
    date: "2026",
    categories: [
      "Product & Mechanical Design",
      "Fluid & Thermal Systems",
      "Analysis & Simulation",
      "Mechatronics & Embedded Systems",
    ],
    featured: true,
    order: 1,
    thumbnail: "/images/projects/smart-surf-buoy/thumbnail.jpg",
    gallery: [
      "/images/projects/smart-surf-buoy/photo-poster-demo.jpg",
      "/images/projects/smart-surf-buoy/photo-closeup.jpg",
      "/images/projects/smart-surf-buoy/cad-exploded-view.jpg",
      "/images/projects/smart-surf-buoy/cad-section-drawing.jpg",
    ],
    video: "/videos/smart-surf-buoy-demo.mp4",
    tags: ["Capstone project", "Marine environment", "Solar power", "Sensor fusion"],
    tools: ["SolidWorks", "Raspberry Pi Pico W (MicroPython)", "ProteusDS", "Python (signal processing)"],
    skills: [
      "Waterproof enclosure design",
      "Mooring & hydrodynamic analysis",
      "Solar & battery power budgeting",
      "Sensor fusion & signal processing",
    ],
    overview:
      "A low-cost, solar-powered smart buoy that measures wave height, wave period, wind speed and direction, and water/air temperature for near-shore surf and marine research. Built with a five-person capstone team and deployed in open water off Vancouver Island for a total build cost under $1,000.",
    problem:
      "Commercial ocean buoys cost upwards of $10,000 and aren't built for the near-shore break zone, where wave energy is highest and most variable, leaving surf forecasters and coastal researchers with a real gap in localized data. The goal was to design, build, and deploy a functional buoy that closed that gap for under $1,000 in total cost.",
    role:
      "One of five members on a capstone design team, contributing to the mechanical hull design, waterproofing strategy, and mooring system analysis alongside teammates handling the electrical and software subsystems.",
    process:
      "The hull is 34 separate 3D-printed pieces glued together, then epoxied, painted, and epoxied again for a durable waterproof shell. Inside, a tower stack holds the battery, charge controller, and electronics mount, with sand compartments at the base for ballast and to damp out high-frequency motion noise. A 5-part 3D-printed wind sensor assembly rides on delrin bushings for smooth, sea-proof motion, and the mooring uses an S-curve line geometry, optimized in ProteusDS, that lets the buoy settle into a small watch circle instead of snapping taut against every wave. Twelve solar panels wired in series feed a charge controller and 12V LiFePO4 battery, stepped down to power a Raspberry Pi Pico W, which reads an IMU, magnetometer, temperature probes, and a hall-effect encoder over I2C and direct GPIO.",
    analysis:
      "A solar study using worst-case winter sun data for the deployment site confirmed the panel array and battery could keep the buoy running self-sufficiently year-round. ProteusDS simulations of the mooring line, run at both a normal sea state and a 5 m worst-case wave, sized the mooring mass and confirmed the buoy could survive extreme conditions without breaking free. A von Mises FEA pass on the 3D-printed PLA hull found a maximum stress of 1.96 MPa against an allowable of about 6 MPa, a safety factor of 3.05, and confirmed the glued seams between hull segments were well within the epoxy's bonding strength.",
    results:
      "The completed buoy was deployed and tested in open water, successfully logging real wave height, wave period, wind data, and temperature while charging its battery entirely from solar power. On the software side, a full post-processing pipeline, a Mahony fusion filter, frame rotation into North-East-Down coordinates, and a Welch-method power spectral density calculation, turned raw accelerometer data into real wave statistics.",
    lessons:
      "The biggest lesson was that data processing, not the sensors themselves, is what makes a floating, rocking platform's data useful: without careful coordinate-frame transforms, tilt correction, and spectral analysis, the raw signal is functionally meaningless. Measured wave height also showed more variability than reference data, likely from accelerometer limitations and the mooring line constraining the buoy's natural response, pointing at filtering and mooring refinements for a future iteration. On the build side, gluing a 34-piece 3D-printed hull taught us that jigsaw-style prints slide and misalign because each piece is only constrained in one plane, a dowel-pin joint would fix that, and for a real production version, a rotationally molded polyethylene hull (built the way whitewater kayaks are) would hold up far better than 3D-printed PLA.",
    downloads: [
      { label: "Capstone final report (PDF)", href: "/downloads/smart-surf-buoy-report.pdf" },
      { label: "Project poster (PDF)", href: "/downloads/smart-surf-buoy-poster.pdf" },
    ],
  },
  {
    slug: "pump-filtration-optimization",
    title: "Layout & Cost Optimization of a Laboratory Water Filtration System",
    date: "2026",
    categories: ["Fluid & Thermal Systems", "Analysis & Simulation"],
    featured: false,
    order: 2,
    thumbnail: "/images/projects/pump-filtration-optimization/thumbnail.jpg",
    gallery: [
      "/images/projects/pump-filtration-optimization/photo-legacy-system.jpg",
      "/images/projects/pump-filtration-optimization/poster.jpg",
      "/images/projects/pump-filtration-optimization/cad-optimized-design.jpg",
    ],
    video: "",
    tags: ["Fluid mechanics", "Design optimization", "Cost reduction", "Course project"],
    tools: ["SolidWorks", "Darcy-Weisbach hydraulic modeling", "Excel"],
    skills: [
      "Hydraulic system analysis",
      "Head loss calculations",
      "Design-for-cost",
      "Technical reporting",
    ],
    overview:
      "A five-person course project redesigning a legacy dual-inlet laboratory water filtration system, removing redundant components, cutting energy use, and lowering manufacturing cost, while still delivering ultra-pure water for lab experiments.",
    problem:
      "The mechanical engineering department's water filtration system was a legacy design repurposed from a different application, carrying an unnecessary reverse osmosis loop, a pump, and a storage tank that added hydraulic losses, energy use, and footprint without improving the water quality the lab actually needed.",
    role:
      "One of five team members. Contributed to the hydraulic modeling of the existing system across its five operating cases and to the redesign and costing of the optimized layout.",
    process:
      "Modeled the existing system's energy balance between inlet and outlet using the Darcy-Weisbach equation for pipe friction losses and standard K-value coefficients for fitting minor losses, breaking the loop into individual pipe segments and components. Evaluated five possible operating cases (different combinations of the two inlet branches) to find the true hydraulic baseline, then used a manufacturer system curve for the UV sterilizer, since no minor-loss coefficient was published for it, and measured pressure differentials for the cartridge filter and deionization tanks to complete the model.",
    analysis:
      "Found that a faucet-supplied inlet alone provided enough pressure to drive the whole system without a pump, letting the redesign eliminate the centrifugal pump, the reverse osmosis loop (redundant once a UV stage handles bacteria and the deionizers already produce near-zero-TDS water), and the storage tank (a bacterial growth risk in an ultra-pure water system). The two deionization tanks were kept in series rather than parallel so the lagging tank still catches whatever the leading tank misses as it saturates.",
    results:
      "The optimized design cut total head loss by 20.5% (a 90% reduction in friction losses alone), reduced the energy needed to produce a given volume of filtered water to about 33% of the original system, and lowered estimated manufacturing cost by 56%, all while keeping the same filtration quality for lab use.",
    lessons:
      "The most valuable design moves came from questioning why each component was there in the first place, the RO loop, pump, and storage tank all made sense for the system's original, unrelated application, but were dead weight for this one. Not being able to pressure-test the real legacy system was a real limitation; several component pressure drops had to be taken from manufacturer data instead of direct measurement, which the report flags as the main place future work should add real instrumentation.",
    downloads: [
      { label: "Final project report (PDF)", href: "/downloads/pump-filtration-optimization-report.pdf" },
    ],
  },
  {
    slug: "hvac-redesign-grad-house",
    title: "Summer Cooling Load Analysis & HVAC Design: The Grad House",
    date: "2026",
    categories: ["Fluid & Thermal Systems"],
    featured: false,
    order: 3,
    thumbnail: "/images/projects/hvac-redesign-grad-house/thumbnail.jpg",
    gallery: [
      "/images/projects/hvac-redesign-grad-house/floor-plan-interior.jpg",
      "/images/projects/hvac-redesign-grad-house/duct-layout-supply.jpg",
      "/images/projects/hvac-redesign-grad-house/equest-energy-chart.jpg",
    ],
    video: "",
    tags: ["HVAC design", "Energy modeling", "ASHRAE standards", "Course project"],
    tools: ["AutoCAD", "eQUEST", "ASHRAE Fundamentals load calculations", "Excel"],
    skills: [
      "Cooling load calculations",
      "Duct sizing & fan selection",
      "Building energy simulation",
      "Code compliance (ASHRAE 62.1 / 90.1)",
    ],
    overview:
      "An individual course project performing the summer peak cooling load analysis and full HVAC design for The Grad House, a proposed renovation of UVic's Halpern Centre for Graduate Students into an open-concept student social space with a restaurant, lounge, bar, and meeting rooms.",
    problem:
      "The renovation needed a new rooftop air handling unit, supply and return duct systems, and diffuser selection sized for a mixed-use social space, three architectural changes (an opened-up vestibule, reconfigured storage rooms) and a much higher, more variable occupancy than the building's original office use.",
    role:
      "Individual project. Performed the full cooling load calculation, HVAC system design, duct sizing, diffuser selection, and energy modeling, then validated the manual results against an eQUEST building energy simulation.",
    process:
      "Calculated room-by-room summer peak cooling loads across all 15 conditioned spaces using the ASHRAE Fundamentals heat-gain methodology (occupancy, lighting, equipment, envelope conduction via the sol-air method, and solar and infiltration gains), then sized a single rooftop constant-volume AHU, its supply and return duct networks using the equal friction method, and diffusers for every room from a manufacturer catalog. Built a parallel eQUEST energy model of the building to cross-check the manual peak load against simulated annual energy consumption.",
    analysis:
      "Found a design peak cooling load of 39.5 kW (11.2 tons), driven mostly by solar gain through west and southeast glazing (31% of sensible load) and lighting (23%). Sized the supply duct network at a target 0.8 Pa/m friction rate and selected the supply fan from the worst-case duct path's total static pressure. The eQUEST model's annual cooling energy came within 0.1% of the manual calculation scaled to annual hours, a strong cross-validation of both methods, while also revealing that space heating, out of scope for the manual calculation, was actually the dominant annual energy use in Victoria's mild-summer climate.",
    results:
      "Produced a complete HVAC design: a 2,002 L/s supply airflow at 13°C, a fully sized and drawn duct network with fan selected against 88 Pa external static pressure, diffusers scheduled for all 15 rooms, and an estimated $26,684/yr total utility cost. Identified an ERV and a rooftop solar PV array as the two highest-value efficiency upgrades, together projected to cut utility costs by about 49%.",
    lessons:
      "The biggest surprise was that cooling was almost a rounding error next to heating in this climate, annual heating energy came out to roughly 13 times the cooling energy, which reframes where a designer should actually spend optimization effort on a Victoria building. Cross-checking a hand calculation against a full energy simulation was also worth the extra effort: the two methods agreeing within 0.1% on cooling energy gave real confidence in both, in a way that either one alone wouldn't have.",
    downloads: [
      { label: "Final project report (PDF)", href: "/downloads/hvac-redesign-grad-house-report.pdf" },
      { label: "Project poster (PDF)", href: "/downloads/hvac-redesign-grad-house-poster.pdf" },
    ],
  },
  {
    slug: "csp-gearbox-design",
    title: "Three-Stage Gearbox Design for a 30 MW Solar Power Plant",
    date: "2024",
    categories: ["Analysis & Simulation"],
    featured: true,
    order: 4,
    thumbnail: "/images/projects/csp-gearbox-design/thumbnail.jpg",
    gallery: [
      "/images/projects/csp-gearbox-design/diagram-critical-points.jpg",
      "/images/projects/csp-gearbox-design/shaft-cross-section.jpg",
    ],
    video: "",
    tags: ["Power transmission", "Machine design", "Renewable energy", "Course project"],
    tools: ["SolidWorks", "AGMA gear design standards", "SKF bearing/coupling selection"],
    skills: [
      "Gear train design",
      "Shaft & bearing selection",
      "Fatigue & duty-cycle analysis",
      "Technical reporting",
    ],
    overview:
      "A five-person course project designing a three-stage gearbox that couples a high-speed steam turbine to a synchronous generator for a proposed 30 MW concentrated solar power (CSP) plant, taking the design from concept through preliminary gear, shaft, and bearing sizing.",
    problem:
      "The gearbox had to step a 6,000 RPM turbine input down to a 450 RPM generator input while handling a 15 MW rated power output, staying within tight shaft-alignment tolerances, and surviving a 25-year service life under a daily load cycle that swings from near-zero output overnight to full output during the day.",
    role:
      "One of five team members on a course design project. Contributed to the introduction and background research and to the shaft speed and load calculations that fed the gear, shaft, and bearing sizing done later in the report.",
    process:
      "Settled on a 3-stage layout (3:1, 20:9, then 2:1 gear ratios) to keep individual gears from becoming oversized while avoiding unnecessary extra stages, then built a 24-hour torque and speed profile for every shaft from the plant's daily electrical generation curve. Selected nitrided AISI 4140 for the gears and quenched-and-tempered AISI 4140 for the shafts, sized every gear pair against AGMA bending and surface fatigue stress, and picked bearings, couplings, seals, and lock nuts from SKF catalogs to match the calculated loads and required lifespan.",
    analysis:
      "Because the plant doesn't run at full 15 MW output for 24 hours a day, the team converted the daily generation profile into an equivalent full-load duty cycle (about 4.9 hours per day at rated torque) rather than sizing every component for continuous full-load operation, avoiding a badly over-designed, overpriced gearbox. That duty cycle drove both the AGMA gear fatigue calculations and the SKF bearing life selection, with the lowest resulting safety factor across all six gears landing at 1.84.",
    results:
      "Produced a complete preliminary design: gears ranging from 0.6 m to 2.5 m in diameter across the three stages, shafts sized between 0.36 m and 1.35 m in diameter with a minimum safety factor of 1.52, matched bearings, couplings, and seals selected from SKF catalogs for the full 25-year duty cycle, and an assembly procedure for the completed gearbox.",
    lessons:
      "Modeling the real daily load profile instead of assuming continuous full-power operation changed the whole sizing exercise. Designing for 24 hours a day at rated torque would have produced a needlessly oversized, overpriced gearbox; the actual bottleneck was reasoning correctly about duty cycle and equivalent life, not the raw peak load.",
    downloads: [
      { label: "Preliminary design report (PDF)", href: "/downloads/csp-gearbox-design-report.pdf" },
    ],
  },
  {
    slug: "hytorc-reaction-arm-failure-analysis",
    title: "Failure Analysis of a HYTORC 360° Rotatable Reaction Arm",
    date: "2025",
    categories: ["Analysis & Simulation"],
    featured: false,
    order: 5,
    thumbnail:
      "/images/projects/hytorc-reaction-arm-failure-analysis/thumbnail.jpg",
    gallery: [
      "/images/projects/hytorc-reaction-arm-failure-analysis/gallery-1.jpg",
      "/images/projects/hytorc-reaction-arm-failure-analysis/gallery-2.jpg",
      "/images/projects/hytorc-reaction-arm-failure-analysis/gallery-3.jpg",
      "/images/projects/hytorc-reaction-arm-failure-analysis/gallery-4.jpg",
    ],
    video: "",
    tags: ["Failure analysis", "Metallurgy", "Fractography", "Course project"],
    tools: [
      "SEM imaging",
      "Vickers/Mohs hardness testing",
      "Archimedes' principle density testing",
      "Ansys Granta EduPack",
    ],
    skills: [
      "Fractography & root-cause analysis",
      "Microstructure evaluation",
      "Material identification & selection",
      "Life-cycle/recyclability assessment",
    ],
    overview:
      "A four-person materials engineering course project reverse-engineering and failure-analyzing a fractured HYTORC 360° rotatable reaction arm, a torque-wrench accessory that reacts counter-torque into a fixed structure during bolted-joint tightening, to identify its material, explain how it broke, and propose better alternatives.",
    problem:
      "A HYTORC reaction arm, used to react torque-wrench loads into a base structure during high-strength bolting (the kind of job used on suspension, gearbox, and chassis connections), had fractured completely at the base where its gear-toothed swivel flap meets the arm body. With no material spec sheet available, the team had to identify the material and determine the most probable cause of failure from the part itself.",
    role:
      "One of four team members (Group 3) on a materials & processes course project. Contributed to the density and hardness testing used to narrow down the alloy, and to the SEM-based fractography used to characterize the failure.",
    process:
      "Started with visual fractography of the fracture surface, identifying distinct crack initiation, crack propagation, and fast-fracture zones. Ran Archimedes'-principle density testing (7.69 g/cm³) and Vickers/Mohs hardness testing (404.6 HV) to narrow down the alloy family, then used SEM imaging on the fracture surface to look for inclusions, crack-deflection patterns, and fracture-mode evidence. Combined those results with a Hall-Petch strength estimate to identify the material and its heat treatment, then researched the blast-furnace-to-casting production route and the anneal/pre-heat/austenitize/oil-quench/temper cycle consistent with that identification.",
    analysis:
      "The fracture surface showed dense lines and sharp features at the origin (crack initiation), circular bands radiating outward (progressive crack propagation), and a smoother, brittle-looking zone consistent with rapid final fracture, an overall signature of brittle fracture in a hardened steel rather than a ductile overload. SEM imaging reinforced this: rounded inclusions embedded in the matrix pointed to an alloy steel, transgranular fracture with crack deflection around those particles and secondary cracking perpendicular to the main crack pointed to cyclic (fatigue-type) loading, and a mix of cleavage facets and ductile dimples indicated mixed-mode failure. Cross-referencing the measured density, hardness, and a Hall-Petch strength estimate against reference alloys pointed to AISI 4140 chromium-molybdenum low-alloy steel, oil-quenched and tempered around 425°C, chosen industrially for its balance of hardenability (from chromium) and resistance to cyclic embrittlement (from molybdenum). That is consistent with the working principle of the part itself, which has to survive alternating torsional and bending stresses every time a wrench is torqued against it.",
    results:
      "Concluded the arm most likely failed from excessive/off-axis torque combined with insufficient support during use, initiating a fatigue crack at the base connection that propagated until the remaining cross-section failed suddenly in a brittle overload. The team also ran a life-cycle comparison: the failed AISI 4140 arm and an alternative AISI 1080 high-carbon steel design had nearly identical recyclability (~4.95-5.0 kg CO2 for the recycled-material option), and all components fully disassemble in 10-15 minutes into ferrous and stainless recycling streams with no bonded interfaces. Induction hardening, nitriding, and hot isostatic pressing were identified as processing routes that could raise the arm's surface fatigue strength without redesigning the part.",
    lessons:
      "No single test told the whole story, it took density, hardness, SEM fractography, and a strength model together to build a confident material identification, and the fracture surface itself (initiation/propagation/fast-fracture zones) was the clearest evidence of how the part actually failed. It was also a good reminder that a part's manufacturing process (in this case, oil quenching and tempering) is inseparable from its failure behavior, not just an implementation detail.",
    downloads: [
      {
        label: "Failure analysis presentation (PDF)",
        href: "/downloads/hytorc-reaction-arm-failure-analysis-report.pdf",
      },
    ],
  },
  {
    slug: "four-bar-mechanism-design",
    title: "‘World Cup Goal’ Automaton: Four-Bar Linkage & Gear Train Design",
    date: "2024",
    categories: ["Analysis & Simulation"],
    featured: false,
    order: 6,
    thumbnail: "/images/projects/four-bar-mechanism-design/thumbnail.jpg",
    gallery: [
      "/images/projects/four-bar-mechanism-design/gallery-1.jpg",
      "/images/projects/four-bar-mechanism-design/gallery-2.jpg",
      "/images/projects/four-bar-mechanism-design/gallery-3.jpg",
    ],
    video: "/videos/four-bar-mechanism-cad-demo.mp4",
    tags: ["Kinematics", "Mechanism synthesis", "Gear trains", "Course project"],
    tools: [
      "SolidWorks",
      "Working Model 2D",
      "Graphical & analytical linkage synthesis",
    ],
    skills: [
      "Four-bar mechanism synthesis",
      "Precision-point/path & motion generation",
      "Gear train & timing design",
      "Concept selection (weighted decision matrix)",
    ],
    overview:
      "A four-person MECH 335 course project to design an automaton, a hand-cranked mechanical scene, that acts out a sports moment using two synthesized four-bar linkages plus a gear train and cam. My own concept, a soccer player scoring a World Cup goal as the crowd cheers, was selected by the team's weighted decision matrix as the design to build.",
    problem:
      "Design and synthesize an automaton driven by a single input crank that animates at least three components using at least two distinct four-bar linkages plus one additional family of mechanism (gears, cams, or similar), while staying within practical manufacturability, cost, and size targets.",
    role:
      "One of four team members (Team 27). Proposed the winning 'World Cup Goal' concept against three teammates' alternatives (a fisherman catching a fish, a baseball hit, and a swimmer racing a flying fish), and contributed to synthesizing the four-bar linkages and building the gear train that ties the mechanism together.",
    process:
      "Each team member pitched a concept; the group scored all four against manufacturability, cost, size, mechanism variety, and design-hour criteria in a weighted selection table, and 'World Cup Goal' won with the highest score (8.2 vs. 7.9, 7.2, and 6). We then picked precision points for the ball's flight path and the player's kicking leg and synthesized both four-bar linkages using both graphical (coordinate-frame path/motion generation) and analytical (standard dyad) methods, verified the coupler curves in Working Model 2D, and built the full gear train and cam mechanism in SolidWorks: a central crank drives a main gear that splits power three ways, to the ball's four-bar linkage through a reduction gear, to a cam that lifts the crowd via an intermediate gear shaft, and to the kicking-leg four-bar linkage through a belt drive.",
    analysis:
      "Verified both four-bar linkages against their required precision points in Working Model 2D by checking the traced coupler curves against the intended ball-flight and kicking-leg paths across a full crank rotation. The original design used a spatial cylindrical cam and a Scotch Yoke to animate the cheering crowd, but the cam profile needed for that motion proved too complex to manufacture and the Scotch Yoke's reciprocating motion was difficult to keep synchronized with the rest of the automaton, so we replaced both with a simpler gear-and-cam system that gave much more reliable timing.",
    results:
      "Delivered a fully synthesized and CAD-modeled automaton where a single crank simultaneously arcs the ball into the net, draws back and swings the player's kicking leg, and lifts the crowd in celebration timed to the ball reaching the net, meeting the project's requirement of at least three animated elements built from two four-bar linkages plus a gear/cam family.",
    lessons:
      "The mechanism that looks simplest on paper (a cam and gears) beat out more 'clever' mechanisms like the spatial cam and Scotch Yoke once synchronization became the real constraint. Choosing a design based on a weighted, criteria-based comparison rather than personal preference also made the group's final call easier to defend and build consensus around.",
    downloads: [
      {
        label: "Automaton design report (PDF)",
        href: "/downloads/four-bar-mechanism-design-report.pdf",
      },
    ],
  },
  {
    slug: "urban-air-mobility-vtol",
    title: "Urban Air Mobility: Hybrid VTOL Emergency Medical Aircraft",
    date: "2025",
    categories: ["Aerospace Engineering"],
    featured: true,
    order: 7,
    thumbnail: "/images/projects/urban-air-mobility-vtol/thumbnail.jpg",
    gallery: [
      "/images/projects/urban-air-mobility-vtol/gallery-1.jpg",
      "/images/projects/urban-air-mobility-vtol/gallery-2.jpg",
      "/images/projects/urban-air-mobility-vtol/gallery-3.jpg",
    ],
    video: "",
    tags: ["VTOL", "Aircraft design", "Conceptual sizing", "Course project"],
    tools: ["SolidWorks", "XFLR5", "Analytic Hierarchy Process / weighted decision matrix"],
    skills: [
      "Conceptual aircraft sizing (MTOM, wing/power loading)",
      "Aerodynamic analysis",
      "Structural loads (V-n diagram, shear/bending)",
      "Propulsion & powerplant integration",
    ],
    overview:
      "An eight-person MECH 475 Aircraft Design capstone conceiving, sizing, and analyzing a hybrid VTOL aircraft meant to extend emergency-medical response from urban hospitals to remote communities in northern British Columbia, closing the gap between a road ambulance and a full-scale rescue helicopter.",
    problem:
      "Rural and remote communities in northern BC can be well over 100 km from the nearest hospital, too far for a road ambulance and too costly to serve with a dedicated rescue helicopter. The brief was to design an aircraft that could fly an emergency crew and patient up to 100 km each way, take off and land without a runway, and do it more cheaply and quietly than existing rotorcraft.",
    role:
      "One of eight team members on a two-semester aircraft design capstone, contributing across concept generation, weighted concept selection, and the sizing/structural analysis used to size the final configuration.",
    process:
      "Generated six candidate configurations (tilt-rotor quadcopter, fixed-rotor quadcopter, lift-and-cruise with ducted fans, gyroplane, tilt-rotor micro-jet, and dual-prop lift-and-cruise) and scored them with an Analytic Hierarchy Process-weighted decision matrix against speed, range, pollution, capacity, footprint, noise, and cost. The lift-and-cruise ducted-fan concept won, so we sized it: picked a main-wing/tandem-wing/ducted-fan layout, ran airfoil polars in XFLR5 to pick the NACA 63-210 wing sections, sized a hybrid powertrain (a turboshaft-driven pusher propeller for cruise plus six electric ducted fans on batteries for vertical lift), laid out the fuselage around a stretcher, a medic seat, and avionics, and iterated the whole aircraft to a converged maximum take-off mass.",
    analysis:
      "Built wing/power-loading design points for both the vertical-flight and forward-flight regimes to size the powerplant, ran shear-force and bending-moment diagrams on the fuselage and main wing for both take-off and cruise load cases, generated a V-n diagram to define the structural flight envelope, and checked longitudinal, lateral, and directional static stability coefficients to confirm the layout was inherently stable. Noise and emissions were estimated from the fan/rotor acoustics and from production and duty-cycle emissions of the Jet A-1 fuel and lithium-ion battery pack, and a per-unit cost was modeled against a fleet of 50 aircraft serving BC hospitals.",
    results:
      "Converged on a hybrid VTOL design with a maximum take-off mass of about 2,450 kg, carrying 4 people (a 500 kg payload of crew, patient, and medical equipment) at a 60 m/s cruise speed over a 200 km round trip, statically stable in all three axes, with an estimated maximum noise level of 72.5 dB at 150 ft, comparable to a household vacuum cleaner, and a modeled unit cost of roughly $5.3M.",
    lessons:
      "A concept that wins a weighted decision matrix on paper still has to survive real sizing. The lift-and-cruise ducted-fan layout looked straightforward in the concept phase, but integrating six ducted fans into the wing structure without wrecking cruise aerodynamics (which is what drove the retractable shutter covers over the fan ducts) was where most of the actual design effort went.",
    downloads: [
      {
        label: "Final design report (PDF)",
        href: "/downloads/urban-air-mobility-vtol-report.pdf",
      },
      {
        label: "Final presentation (PDF)",
        href: "/downloads/urban-air-mobility-vtol-presentation.pdf",
      },
    ],
  },
  {
    slug: "automated-sorting-system",
    title: "Automated Material Sorting System",
    date: "2025",
    categories: ["Mechatronics & Embedded Systems", "Product & Mechanical Design"],
    featured: false,
    order: 8,
    thumbnail: "/images/projects/automated-sorting-system/thumbnail.jpg",
    gallery: [
      "/images/projects/automated-sorting-system/photo-electronics.jpg",
      "/images/projects/automated-sorting-system/photo-wiring.jpg",
      "/images/projects/automated-sorting-system/photo-arduino-lcd.jpg",
      "/images/projects/automated-sorting-system/diagram-block.jpg",
      "/images/projects/automated-sorting-system/diagram-circuit.jpg",
      "/images/projects/automated-sorting-system/diagram-flowchart-main.jpg",
      "/images/projects/automated-sorting-system/diagram-flowchart-classification.jpg",
    ],
    video: "/videos/automated-sorting-system-demo.mp4",
    tags: ["Embedded systems", "Interrupt-driven control", "Sensors & actuators", "Course project"],
    tools: ["ATmega2560 (embedded C)", "Reflective & optical sensors", "Stepper + DC motor drivers", "1602 LCD"],
    skills: [
      "Interrupt-driven embedded programming",
      "Sensor-based material classification",
      "Motion profiling (S-curve)",
      "Real-time system debugging",
    ],
    overview:
      "An automated object-sorting system built around an ATmega2560 microcontroller for a second-year mechatronics course. A conveyor carries objects past a reflective sensor for material classification, then a stepper-driven rotating bin sorts each one into the correct bin. The final system sorted 48 objects in 29 seconds with zero errors, built and coded with one partner.",
    problem:
      "The assignment was to design a system that could sort 48 objects of four material types, white and black plastic, aluminum, and steel, in under 60 seconds with minimal errors, while keeping the machine and its users safe. Every part of the system, sensing, classification, and actuation, had to run on a single microcontroller against real hardware constraints.",
    role:
      "Built with one partner. Shared ownership of the embedded C firmware, including the interrupt service routines, ADC-based material classification, and the FIFO queue that kept objects sorted in the order they were detected, along with the stepper motor motion profile used to rotate the sorting bin.",
    process:
      "Built around an ATmega2560 running a hybrid polling-and-interrupt architecture. A first optical sensor triggers an ADC-sampling interrupt that classifies each object by reflectivity as it passes, a FIFO queue preserves sort order down the belt, and a second optical sensor at the exit gate triggers the stepper motor to rotate the sorting bin into position before releasing the object. Pause and ramp-down buttons were wired to their own interrupts so the belt could stop safely without losing track of objects already on it.",
    analysis:
      "Determined ADC classification thresholds for each material experimentally, running each material through the sensor repeatedly to log its reflectivity range before hardcoding those thresholds into the classification logic. Tuned an S-curve acceleration profile for the stepper motor, from a 20 ms down to a 6 ms minimum step delay, so the bin could rotate as fast as possible without missing steps under load, and set the DC belt motor to a 50.78% PWM duty cycle, the fastest speed that didn't cause objects to slip during braking.",
    results:
      "The final system sorted all 48 objects in 29 seconds with zero classification or placement errors, well inside the 60-second target. A pre-release timing strategy, releasing each object 2 steps before the bin fully aligned, combined with an 80 ms settling delay, kept accuracy high even as belt speed and stepper timing were pushed close to their limits.",
    lessons:
      "The stepper motor's performance was constrained by how much weight built up in the bins as metal parts landed, which meant tuning the motion profile for the worst case, not the average case. Switching lab stations partway through the project also cost real time, since the hardware wasn't standardized station to station and belt speed and motion profiles had to be re-tuned each time, a good argument for standardizing test equipment before a build like this, and for learning Git before starting a team codebase.",
    downloads: [
      { label: "Final project report (PDF)", href: "/downloads/automated-sorting-system-report.pdf" },
    ],
  },
  {
    slug: "retracting-bridge-design",
    title: "Retractable Bridge: Four-Bar Mechanism & Prototype",
    date: "2025",
    categories: ["Product & Mechanical Design"],
    featured: false,
    order: 9,
    thumbnail: "/images/projects/retracting-bridge-design/thumbnail.jpg",
    gallery: [
      "/images/projects/retracting-bridge-design/gallery-1.jpg",
      "/images/projects/retracting-bridge-design/gallery-2.jpg",
      "/images/projects/retracting-bridge-design/gallery-3.jpg",
    ],
    video: "/videos/retracting-bridge-demo.mp4",
    tags: ["Mechanism design", "Kinematics", "Prototyping", "Course project"],
    tools: [
      "SolidWorks",
      "PMKS+ (kinematic verification)",
      "Laser-cut plywood & 3D printing",
    ],
    skills: [
      "Concept generation & weighted decision matrix",
      "Four-bar mechanism synthesis",
      "Structural/stress hand calculations",
      "Prototyping & iterative testing",
    ],
    overview:
      "A five-person MECH 350 machine design project to design, prototype, and test a scaled retractable bridge that folds completely out of the way of a waterway to clear air, water, and land traffic in a tightly constrained urban site, built and validated as a working laser-cut/3D-printed prototype.",
    problem:
      "Design a bridge spanning a 32-inch channel that stands no taller than 12 inches when deployed, retracts to clear the channel using a single human-triggered input (motor or mechanical), can be manually redeployed, and survives repeated retraction cycles, all while remaining structurally sound under a simulated roadway load of steel plates.",
    role:
      "One of five team members (Group 21). Contributed across concept generation, the weighted-decision-matrix concept selection, and the structural/kinematic analysis and prototype build used to validate the final four-bar design.",
    process:
      "Generated three concepts, a sliding-rail folding bridge, a trifold motor-driven bridge with a counterweight, and a four-bar retracting bridge using a rack-and-pinion and gravity to drive the fold, and scored them in a pairwise-weighted decision matrix against load capacity, durability, ease of actuation, cost, safety, and aesthetics. The four-bar concept won and went through three build iterations: the first exposed a flimsy main structure and sagging decks, the second added stiffening cross members and a sliding latch but still bound during retraction, and the final version fixed the binding by adjusting the four-bar links to no longer sit co-linear at full extension. The finished prototype uses a DC motor and spool/string drive to pull a motor-side deck backward along a bearing-guided slotted track; once clear of its support, a four-bar linkage with friction dampers lowers a second 'far deck' under gravity into a controlled vertical stow, and a limit switch cuts power at full retraction.",
    analysis:
      "Used graphical four-bar synthesis (intersecting-circles, three-position motion generation) to size the follower and coupler links, then verified the resulting path in the PMKS+ web tool before cutting parts. Hand-calculated the shaft shear safety factor (250, showing steel was over-specified but the only stock size available) and the bending safety factor of the pylon's slotted guide track, which came out to just 1.875 with 3 mm plywood and was raised to 7.5 by reinforcing the slot to 12 mm.",
    results:
      "The finished prototype passed every objective in formal testing: 32-inch span (target 32\"), 11.875\" deployed height (target ≤12\"), 7.70\" deck width with a 3\" clear roadway, 1/32\" deck flatness (target ≤1/16\"), 9 lb load capacity (target ≥4 lb), a 5.34 N actuation pull force (target ≤20 N), and 30 successful retraction cycles with no damage (target ≥12). The prototype was delivered and demoed to the course client on schedule.",
    lessons:
      "A design that scores well on a weighted decision matrix still has to survive being built. The four-bar concept won on paper for its simplicity, but getting it to actually retract smoothly took two full iterations to fix real problems (a flimsy structure, sagging decks, and binding links) that weren't visible until the prototype was in hand.",
    downloads: [
      {
        label: "Final design report (PDF)",
        href: "/downloads/retracting-bridge-design-report.pdf",
      },
    ],
  },
  {
    slug: "fea-buoy-nx",
    title: "Structural FEA & Optimization of a Smart Buoy Hull in Siemens NX",
    date: "2026",
    categories: ["Analysis & Simulation"],
    featured: false,
    order: 10,
    thumbnail: "/images/projects/fea-buoy-nx/thumbnail.jpg",
    gallery: [
      "/images/projects/fea-buoy-nx/gallery-1.jpg",
      "/images/projects/fea-buoy-nx/gallery-2.jpg",
    ],
    video: "/videos/fea-buoy-nx-simulation.mp4",
    tags: ["FEA", "Structural optimization", "Simulation", "Course project"],
    tools: [
      "Siemens NX (CAD + FEA)",
      "ProteusDS (hydrodynamic simulation)",
      "Ansys Granta EduPack",
    ],
    skills: [
      "Integrated CAD/CAE workflow",
      "Finite element modeling & mesh setup",
      "Hydrodynamic load estimation",
      "Structural optimization",
    ],
    overview:
      "A three-person MECH 410 (Computer-Aided Design and Engineering) project applying an integrated CAD/CAE workflow in Siemens NX to structurally validate and optimize the hull of the near-shore smart buoy I helped design in a separate capstone project, checking whether it survives real mooring and wave loading and how much material could be trimmed out.",
    problem:
      "The smart buoy's hull is 3D printed in sections and adhesively bonded together, and needed a validated structural analysis, since it must survive mooring-line tension and hydrostatic/wave loading without the team having ever confirmed it wouldn't fail, or checked whether its wall thickness (and therefore material cost and print time) could be reduced.",
    role:
      "One of three team members (Group 14). Ran the ProteusDS hydrodynamic simulations used to determine the mooring loads and researched how PLA's material properties (as a 3D-printed material) affect structural strength, feeding the loads and material data the team used for the FEA and optimization.",
    process:
      "Modeled the buoy hull in Siemens NX and estimated its draft depth from mass and buoyancy, then ran ProteusDS hydrodynamic simulations for Sea State 7 near-shore storm conditions (6 m waves, 15 s period, 0.5 m/s current, 40 km/h wind) at real deployment sites along Vancouver Island to get the peak mooring tension. Pulled PLA and polyethylene material properties from Ansys Granta EduPack, applied the mooring tension and hydrostatic pressure as loads in NX FEA with a tetrahedral mesh, and used NX's optimization tools to find how thin the hull wall could go for both a 3D-printed PLA prototype and a production polyethylene version, including testing whether an internal stiffening rib would allow further thinning.",
    analysis:
      "The baseline 12.7 mm wall thickness produced a peak von Mises stress of only about 1.95 MPa under the ~340 N mooring load, well under PLA's 45-72 MPa yield strength, so NX's optimizer was used to minimize wall thickness against a stress constraint. For the ribbed polyethylene variant, rib thickness and wall thickness were both treated as design variables in a formal geometry optimization run against a 10.5 MPa stress ceiling.",
    results:
      "Optimization reduced the hull wall thickness from 12.7 mm to 4.58 mm, a 62.4% reduction in material volume, while raising peak stress to only 10.6 MPa, still comfortably within material limits. Adding an internal rib to the polyethylene version only saved about 30 g (under 1%) versus the plain optimized wall, and would have required extra standoffs for the electronics, so the team recommended the simpler ribless design instead.",
    lessons:
      "An integrated CAD/CAE workflow made comparing PLA and polyethylene versions of the same hull fast, since geometry, material properties, and loads could all be updated in one NX model instead of rebuilding the analysis from scratch. It also showed that an optimization that looks good on a stress plot (the rib) isn't automatically worth building once secondary costs, like extra standoffs and fasteners, are counted.",
    downloads: [
      {
        label: "Final project report (PDF)",
        href: "/downloads/fea-buoy-nx-report.pdf",
      },
      {
        label: "Final presentation (PDF)",
        href: "/downloads/fea-buoy-nx-presentation.pdf",
      },
    ],
  },
  {
    slug: "robot-car-project",
    title: "Ball-Transport Robot: First-Year Design Challenge",
    date: "2021",
    categories: ["Mechatronics & Embedded Systems"],
    featured: false,
    order: 11,
    thumbnail: "/images/projects/robot-car-project/thumbnail.jpg",
    gallery: [
      "/images/projects/robot-car-project/gallery-1.jpg",
      "/images/projects/robot-car-project/gallery-2.jpg",
    ],
    video: "/videos/robot-car-demo.mp4",
    tags: ["Robotics", "VEX", "Sensors & control", "First-year project"],
    tools: [
      "VEX Robotics hardware (motors, motor controllers, VEXnet)",
      "IR & ultrasonic sensors",
      "RobotC/EasyC programming",
    ],
    skills: [
      "Basic robot control programming",
      "Sensor integration & calibration",
      "Mechanical assembly",
      "Teamwork & iterative testing",
    ],
    overview:
      "My first engineering design project, in first year: building and programming a wheeled VEX robot with an onboard arm and cradle to pick up a ball, carry it across a competition arena without dropping it, and place it precisely inside a target circle.",
    problem:
      "Design, build, and program a robot that could reliably transport a ball across an arena and set it down inside a marked circle at a specific location, without dropping or fumbling it along the way, using a kit of VEX motors, sensors, and structural parts.",
    role:
      "Team project during my first year of engineering, my first real exposure to building and coding a physical robot as a team, including hands-on mechanical assembly and sensor wiring.",
    process:
      "Built a four-wheeled chassis from VEX structural parts and motors, added a simple arm-and-cradle gripper (a foam/cardboard cradle sized to hold the ball securely) driven by its own motor, and wired up a VEXnet-controlled motor controller along with IR and ultrasonic sensors to help the robot sense the arena and line up with the target circle. Programmed the drive base and the arm's pickup/carry/release sequence, then ran repeated test passes through the arena to tune sensor thresholds and timing.",
    analysis:
      "Iterated mostly through hands-on testing rather than formal analysis: checking that the cradle held the ball securely over the robot's driving speed and turns, that the sensors reliably detected the target circle without false triggers, and that the release sequence set the ball down gently instead of dropping it.",
    results:
      "Delivered a working robot that could carry the ball across the arena and place it in the target circle, my first taste of taking a design from a kit of parts and code through to a physical machine that had to perform a real task under pressure.",
    lessons:
      "This project taught early, fundamental lessons that stuck with every project after it: build in time for hands-on iteration since the robot never behaved exactly like it did on paper, and treat teamwork and clear task division as seriously as the technical work itself.",
  },
];

/** Utility: return projects sorted by their `order` field (ascending). */
export function getOrderedProjects() {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** Utility: return only the projects flagged `featured: true`. */
export function getFeaturedProjects() {
  return getOrderedProjects().filter((p) => p.featured);
}

/** Utility: look up a single project by its slug. */
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** All distinct categories present in the data, used to build the filter bar. */
export function getProjectCategories() {
  return Array.from(new Set(projects.flatMap((p) => p.categories)));
}

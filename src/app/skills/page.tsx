import type { Metadata } from "next";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SkillCategoryCard } from "@/components/skills/skill-category";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills for ${site.name}, organized by mechanical design, CAD, manufacturing, analysis, programming, and professional skills.`,
};

export default function SkillsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-5xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Skills
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            What I bring to a team
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Organized by category rather than a flat list, since &quot;skills&quot;
            means something different in design versus analysis versus
            working with a team.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

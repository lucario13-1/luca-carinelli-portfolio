import type { Metadata } from "next";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ExperienceCard } from "@/components/experience/experience-card";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work history for ${site.name}, including co-ops and internships across aerospace, energy, and engineering consulting.`,
};

export default function ExperiencePage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Experience
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I&apos;ve worked
          </h1>
          <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Roles that shaped how I approach engineering, from aerospace
            manufacturing to energy infrastructure to building systems design.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.company + entry.position} entry={entry} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

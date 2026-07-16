import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ProjectGallery } from "@/components/projects/project-gallery";

export const metadata: Metadata = {
  title: "Projects",
  description: `Engineering project case studies by ${site.name}, problem, process, analysis, and outcome for each project.`,
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Projects
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Case studies, not a gallery
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Click any project to open the full case study.
          </p>
        </Reveal>

        <Suspense>
          <ProjectGallery />
        </Suspense>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function FeaturedProject() {
  const project = getFeaturedProjects()[0];
  if (!project) return null;

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured project"
            title="A closer look at recent work"
            description="One project, expanded: the full case study covers the problem, process, analysis, and outcome."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href={`/projects?project=${project.slug}`}
            className="group mt-10 grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-card p-4 transition-colors hover:border-foreground/20 md:grid-cols-2 md:gap-10 md:p-6"
          >
            <ImagePlaceholder
              src={project.thumbnail || undefined}
              alt={project.title}
              label="Project hero image, replace via thumbnail in data/projects.ts"
              className="aspect-[4/3] w-full rounded-2xl"
            />

            <div className="pb-2 pr-2">
              <p className="text-sm font-medium text-brand">{project.date}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-muted-foreground">
                {project.overview}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                View full case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

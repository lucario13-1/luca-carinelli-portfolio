"use client";

import type { Project } from "@/data/projects";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

export function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  return (
    <Reveal delay={(index % 6) * 0.05}>
      <button
        type="button"
        onClick={onClick}
        className="group block w-full text-left"
        aria-label={`Open case study: ${project.title}`}
      >
        <ImagePlaceholder
          src={project.thumbnail || undefined}
          alt={project.title}
          label={project.title}
          className="aspect-[4/3] w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.015]"
        />
        <div className="mt-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
            <p className="text-xs font-medium uppercase tracking-wider text-brand">
              {project.categories.join(" · ")}
            </p>
            <p className="text-xs text-muted-foreground">{project.date}</p>
          </div>
          <h3 className="mt-1 text-base font-semibold tracking-tight group-hover:text-brand">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </button>
    </Reveal>
  );
}

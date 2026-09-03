"use client";

import * as React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { getOrderedProjects, getProjectBySlug, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";

const allProjects = getOrderedProjects();

export function ProjectGallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Supports deep-linking a project modal from elsewhere on the site via
  // /projects?project=<slug> (used by the homepage featured project link).
  // Read once as lazy initial state rather than in an effect, since
  // searchParams is already available synchronously on first render.
  const initialProject = React.useMemo(() => {
    const slug = searchParams.get("project");
    return slug ? getProjectBySlug(slug) ?? null : null;
  }, [searchParams]);

  const [selected, setSelected] = React.useState<Project | null>(initialProject);
  const [open, setOpen] = React.useState(Boolean(initialProject));

  function openProject(project: Project) {
    setSelected(project);
    setOpen(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && searchParams.get("project")) {
      router.replace(pathname);
    }
  }

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onClick={() => openProject(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

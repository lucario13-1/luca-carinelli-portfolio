"use client";

import { Download, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { getEmbedUrl, isLocalVideoFile } from "@/lib/video";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;
  const isLocalVideo = isLocalVideoFile(project.video);
  const embedUrl = isLocalVideo ? undefined : getEmbedUrl(project.video);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[88vh] w-full max-w-3xl flex-col gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        <ImagePlaceholder
          src={project.thumbnail || undefined}
          alt={project.title}
          label="Project hero image"
          className="aspect-[21/9] w-full shrink-0 rounded-t-xl"
        />

        <div className="p-6 sm:p-8">
          <DialogHeader className="items-start text-left">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand">
              <span>{project.categories.join(" · ")}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{project.date}</span>
            </div>
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription>{project.overview}</DialogDescription>
          </DialogHeader>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="overview" className="mt-7">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger
                value="overview"
                className="flex-none rounded-full border border-border bg-muted/60 px-3 py-1.5 text-foreground/70 data-active:border-transparent data-active:bg-brand data-active:text-brand-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="process"
                className="flex-none rounded-full border border-border bg-muted/60 px-3 py-1.5 text-foreground/70 data-active:border-transparent data-active:bg-brand data-active:text-brand-foreground"
              >
                Process & Analysis
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="flex-none rounded-full border border-border bg-muted/60 px-3 py-1.5 text-foreground/70 data-active:border-transparent data-active:bg-brand data-active:text-brand-foreground"
              >
                Gallery
              </TabsTrigger>
              <TabsTrigger
                value="results"
                className="flex-none rounded-full border border-border bg-muted/60 px-3 py-1.5 text-foreground/70 data-active:border-transparent data-active:bg-brand data-active:text-brand-foreground"
              >
                Results & Downloads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <Field label="Problem / objective">{project.problem}</Field>
              <Field label="My role">{project.role}</Field>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold">Tools & software used</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {project.tools.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold">Skills demonstrated</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {project.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-6 space-y-6">
              <Field label="Design process">{project.process}</Field>
              <Field label="Engineering analysis">{project.analysis}</Field>
              <Field label="Lessons learned">{project.lessons}</Field>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6 space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold">Photos & CAD renders</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.gallery.map((src, i) => (
                    <ImagePlaceholder
                      key={i}
                      src={src || undefined}
                      alt={`${project.title}, image ${i + 1}`}
                      label={`Photo / render ${i + 1}`}
                      className="aspect-square w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold">Video</p>
                {isLocalVideo ? (
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full rounded-lg bg-black"
                  >
                    <source src={project.video} />
                  </video>
                ) : embedUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={embedUrl}
                      title={`${project.title} video`}
                      className="size-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    alt="Project video"
                    label="Add a YouTube/Vimeo link via `video` in data/projects.ts"
                    variant="video"
                    className="aspect-video w-full rounded-lg"
                  />
                )}
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-6 space-y-6">
              <Field label="Final result / outcome">{project.results}</Field>
              <div>
                <p className="mb-2 text-sm font-semibold">Downloads</p>
                {project.downloads && project.downloads.length > 0 ? (
                  <ul className="space-y-2">
                    {project.downloads.map((d) => (
                      <li key={d.label}>
                        <a
                          href={d.href || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                        >
                          <Download className="size-3.5" />
                          {d.label}
                          <ExternalLink className="size-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No downloadable files for this project yet.
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

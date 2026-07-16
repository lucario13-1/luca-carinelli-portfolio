import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download or preview ${site.name}'s resume.`,
};

export default function ResumePage() {
  // Checked at build/request time so the page never shows a broken
  // embed. If you haven't dropped a PDF into /public/resume yet, it
  // shows a clear placeholder card instead.
  const resumeExists = fs.existsSync(
    path.join(process.cwd(), "public", site.resumeFile)
  );

  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Resume
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              My resume
            </h1>
          </div>
          <Button
            size="lg"
            nativeButton={false}
            className="gap-2 rounded-full px-6"
            render={<a href={site.resumeFile} download />}
          >
            <Download className="size-4" />
            Download PDF
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {resumeExists ? (
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={site.resumeFile}
                title={`${site.name} resume`}
                className="h-[80vh] w-full"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border px-6 py-24 text-center">
              <FileText className="size-8 text-muted-foreground/50" strokeWidth={1.25} />
              <p className="max-w-sm text-sm text-muted-foreground">
                No resume file found yet. Add your PDF at{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  public{site.resumeFile}
                </code>{" "}
                and it will appear here automatically, see OWNER_GUIDE.md.
              </p>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

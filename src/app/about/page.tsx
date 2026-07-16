import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Interests } from "@/components/about/interests";
import { Timeline } from "@/components/about/timeline";

export const metadata: Metadata = {
  title: "About",
  description: `Who ${site.name} is, why he chose mechanical engineering, and the path that led here.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.7fr] md:gap-10">
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wider text-brand">
                About
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                My story
              </h1>
            </Reveal>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <Reveal delay={0.05}>
                <p>{site.about.whoIAm}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>{site.about.whyEngineering}</p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1} className="mx-auto w-full max-w-xs md:mx-0">
            <ImagePlaceholder
              src="/images/about-worksite.jpg"
              alt={`${site.name} on-site`}
              label="Photo of you at work / in the field"
              className="aspect-[3/4] w-full rounded-3xl"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What I care about"
              title="Interests"
              description="The areas I keep coming back to, in coursework, side projects, and job searches alike."
            />
          </Reveal>
          <div className="mt-10">
            <Interests />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="The path so far"
              title="Education & experience"
            />
          </Reveal>
          <div className="mt-12">
            <Timeline />
          </div>
        </Container>
      </section>
    </>
  );
}

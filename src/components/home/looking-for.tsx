import { Check } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LookingFor() {
  return (
    <section className="bg-secondary/30 py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What I'm looking for"
            title="Where I'd like to point this next"
            description="Open to full-time roles and internships in the following areas."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {site.lookingFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-background px-4 py-3 text-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button
            size="lg"
            nativeButton={false}
            className="rounded-full px-6"
            render={<Link href="/contact" />}
          >
            Get in touch
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

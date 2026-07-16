import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

// Homepage snapshot of the full Skills page, pulls the CAD, Analysis, and
// Programming categories only, since those read best as a quick "toolkit"
// glance. Edit categories/skills themselves in data/skills.ts.
const TOOLKIT_CATEGORIES = ["CAD", "Analysis", "Programming", "Manufacturing"];

export function Toolkit() {
  const categories = skillCategories.filter((c) =>
    TOOLKIT_CATEGORIES.includes(c.title)
  );

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Technical toolkit"
              title="Software & tools I reach for"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/skills"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Full skills breakdown
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.06}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-sm font-semibold">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <Badge key={item.name} variant="outline" className="font-normal">
                    {item.name}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

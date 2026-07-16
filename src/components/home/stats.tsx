import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30 py-14">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

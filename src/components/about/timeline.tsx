import { GraduationCap, Briefcase } from "lucide-react";
import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <ol className="relative border-l border-border pl-8">
      {timeline.map((entry, i) => {
        const Icon = entry.type === "education" ? GraduationCap : Briefcase;
        return (
          <Reveal key={`${entry.title}-${entry.dateRange}`} as="li" delay={i * 0.06} className="mb-10 last:mb-0">
            <span
              className={cn(
                "absolute -left-[17px] flex size-8 items-center justify-center rounded-full border bg-background",
                entry.type === "education"
                  ? "border-brand text-brand"
                  : "border-foreground/30 text-foreground"
              )}
            >
              <Icon className="size-4" />
            </span>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {entry.dateRange}
            </p>
            <h3 className="mt-1 text-base font-semibold tracking-tight">
              {entry.title}
            </h3>
            <p className="text-sm text-muted-foreground">{entry.organization}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          </Reveal>
        );
      })}
    </ol>
  );
}

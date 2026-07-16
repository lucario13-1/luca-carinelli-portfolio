import type { ExperienceEntry } from "@/data/experience";
import { Reveal } from "@/components/shared/reveal";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <Card className="border-border shadow-none">
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr]">
          <ImagePlaceholder
            src={entry.logo || undefined}
            alt={`${entry.company} logo`}
            label={entry.company}
            variant="logo"
            className="size-16 shrink-0 rounded-xl sm:size-20"
          />

          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.position}
                </h3>
                <p className="text-sm font-medium text-brand">{entry.company}</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-right">
                {entry.dates}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{entry.location}</p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {entry.accomplishments.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {entry.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

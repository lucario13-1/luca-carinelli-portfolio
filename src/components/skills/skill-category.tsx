import type { SkillCategory } from "@/data/skills";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

export function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const hasLevels = category.items.some((item) => item.level !== undefined);

  return (
    <Reveal delay={index * 0.06} className="rounded-2xl border border-border p-6">
      <h3 className="text-base font-semibold tracking-tight">{category.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>

      {hasLevels ? (
        <div className="mt-5 space-y-4">
          {category.items.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <Progress value={item.level ?? 0} className="mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {category.items.map((item) => (
            <Badge key={item.name} variant="secondary" className="font-normal">
              {item.name}
            </Badge>
          ))}
        </div>
      )}
    </Reveal>
  );
}

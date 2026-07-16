import { Plane, Thermometer, Bot, Cpu, Zap, Wrench, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

// Maps the `icon` string in data/site.ts → an actual lucide-react component.
// If you add a new interest with a different icon, import it above and add
// it to this map using the same name.
const ICONS: Record<string, LucideIcon> = {
  Plane,
  Thermometer,
  Bot,
  Cpu,
  Zap,
  Wrench,
};

export function Interests() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {site.interests.map((interest, i) => {
        const Icon = ICONS[interest.icon] ?? Wrench;
        return (
          <Reveal
            key={interest.label}
            delay={i * 0.05}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border px-4 py-6 text-center transition-colors hover:border-foreground/20"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-muted text-brand">
              <Icon className="size-5" strokeWidth={1.75} />
            </div>
            <span className="text-sm font-medium">{interest.label}</span>
          </Reveal>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import { ImageIcon, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Drop-in image slot used everywhere a real photo/render eventually goes
 * (headshot, project thumbnails, galleries, company logos).
 *
 * - If `src` is left empty/undefined, it renders a clearly-labeled
 *   placeholder so nobody mistakes it for a real broken image.
 * - Once you add a real file under /public and pass its path as `src`,
 *   it automatically switches to rendering that image with next/image.
 *
 * See OWNER_GUIDE.md → "Adding photos" for exact folder paths.
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  className,
  variant = "photo",
  priority,
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  variant?: "photo" | "video" | "logo";
  priority?: boolean;
}) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "logo" ? "bg-white p-3" : "bg-muted",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={variant === "logo" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-border bg-[linear-gradient(135deg,var(--muted)_0%,var(--background)_100%)] text-center",
        className
      )}
    >
      {variant === "video" ? (
        <PlayCircle className="size-8 text-muted-foreground/50" strokeWidth={1.25} />
      ) : (
        <ImageIcon className="size-7 text-muted-foreground/50" strokeWidth={1.25} />
      )}
      <p className="max-w-[80%] text-xs font-medium leading-snug text-muted-foreground/70">
        {label ?? alt}
      </p>
    </div>
  );
}

import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.title} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {site.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {site.links.linkedin && (
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-[18px]" />
            </a>
          )}
          {site.links.github && (
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-[18px]" />
            </a>
          )}
          {site.links.email && (
            <a
              href={site.links.email}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-[18px]" />
            </a>
          )}
        </div>
      </Container>
      <Container className="border-t border-border py-5">
        <p className="text-xs text-muted-foreground">
          © {year} {site.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}

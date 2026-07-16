import type { Metadata } from "next";
import { Mail, Download } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, email, LinkedIn, GitHub, and resume.`,
};

const links = [
  { label: "Email", href: site.links.email, icon: Mail },
  { label: "LinkedIn", href: site.links.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: site.links.github, icon: GithubIcon },
  { label: "Resume", href: site.resumeFile, icon: Download },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Contact
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether it&apos;s a role, an internship, or just a question about
              one of the projects on this site, I&apos;ll get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-sm font-semibold">Other ways to reach me</p>
            <ul className="mt-4 space-y-1">
              {links.map((link) =>
                link.href ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      download={link.label === "Resume" ? true : undefined}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <link.icon className="size-4" />
                      {link.label}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs text-muted-foreground">{site.location}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

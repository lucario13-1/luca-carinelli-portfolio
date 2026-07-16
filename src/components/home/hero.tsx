"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ScrollIndicator } from "@/components/home/scroll-indicator";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5" />
            {site.location}
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-brand sm:text-2xl">
            {site.title}
          </p>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.heroIntro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="gap-2 rounded-full px-6"
              render={<a href={site.resumeFile} target="_blank" rel="noreferrer" />}
            >
              <FileText className="size-4" />
              View Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="gap-2 rounded-full px-6"
              render={<Link href="/projects" />}
            >
              Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              className="rounded-full px-6"
              render={<Link href="/contact" />}
            >
              Contact
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto w-full max-w-sm"
        >
          <ImagePlaceholder
            src="/images/headshot.jpg"
            alt={`Professional headshot of ${site.name}`}
            label="Professional headshot, replace at /public/images/headshot.jpg"
            variant="photo"
            priority
            className="aspect-[4/5] w-full rounded-3xl"
          />
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}

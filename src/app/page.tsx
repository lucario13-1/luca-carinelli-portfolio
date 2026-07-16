import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedProject } from "@/components/home/featured-project";
import { Toolkit } from "@/components/home/toolkit";
import { LookingFor } from "@/components/home/looking-for";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProject />
      <Toolkit />
      <LookingFor />
    </>
  );
}

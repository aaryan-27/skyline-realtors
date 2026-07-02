import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Hotspots } from "@/components/home/Hotspots";
import { Testimonials } from "@/components/home/Testimonials";
import { LeadSection } from "@/components/home/LeadSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <Hotspots />
      <Testimonials />
      <LeadSection />
    </>
  );
}

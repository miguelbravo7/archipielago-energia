import { ServicesHero } from "@/components/ServicesHero";
import { SimpleFeaturesAlternating } from "@/components/SimpleFeaturesAlternating";
import { ServiceList } from "@/components/ServiceList";
import { FeaturesWithList } from "@/components/FeaturesWithList";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: "Services - Archipielago",
  description:
    "We help you develop a website that is custom-made for your business. Our services include, but are not limited to: Web design, Web Development and SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-white md:h-32">
        <svg
          className="absolute h-full w-full text-orange-200"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <SimpleFeaturesAlternating />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-orange-200 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      <ServiceList />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-white md:h-32">
        <svg
          className="absolute h-full w-full text-orange-200"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <FeaturesWithList />

      <section className="bg-gradient-to-b from-orange-200 to-white pb-12 pt-12 md:pb-16 md:pt-16 lg:pt-28">
        <Process />
      </section>

      <CallToAction />
    </>
  );
}

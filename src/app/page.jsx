import { HomeHero } from "@/components/HomeHero";
import { LogoCloud } from "@/components/LogoCloud";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Process } from "@/components/Process";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ServicesHero } from "@/components/ServicesHero";
import { ServiceList } from "@/components/ServiceList";
import { SocialProof } from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { AOSInit } from "@/components/AOS";

export default function HomePage() {
  return (
    <>
      <AOSInit />

      <HomeHero />

      <div className="bg-white py-24 sm:py-32">
        <LogoCloud />
      </div>

      <ServicesHero />

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-red-100"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      <section className="bg-red-100 px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <ServicesOverview />
      </section>

      {/* Diagonal section separator */}
      <div className="relative h-16 w-full bg-red-100 md:h-32 lg:h-48">
        <svg
          className="absolute h-full w-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>

      <section className="bg-white pb-12 pt-10 md:pb-16 md:pt-12">
        {/*
        <Process />
      */}
        <ServiceList />
      </section>

      {/* Featured work wrapper */}
      {/*  <section className="px-4 pt-12 pb-10 md:pb-12 md:pt-16 bg-orange-200 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-xl mx-auto">
          {/ Featured work section header /}
          <div className="w-full max-w-xl mx-auto text-center lg:max-w-3xl md:max-w-2xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-stone-700 rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300">
              Our work
            </p>
            <h2 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
              Check out some of our recent & current work
            </h2>
          </div>

          <FeaturedWork />
        </div>
      </section> */}

      {/* Diagonal section separator 
      <div className="relative w-full h-16 bg-orange-200 md:h-32 lg:h-48">
        <svg
          className="absolute w-full h-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,100 100,100 100,0" />
        </svg>
      </div>
      
      */}

      {/* <SocialProof /> */}

      <section>
        <div
          aria-hidden="true"
          class="absolute m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40"
        >
          <div class="from-primary h-56 bg-gradient-to-br to-rose-400 blur-[106px]"></div>
          <div class="h-32 bg-gradient-to-r from-red-400 to-orange-300 blur-[106px]"></div>
        </div>

        <FAQ />
      </section>

      <CallToAction />
    </>
  );
}

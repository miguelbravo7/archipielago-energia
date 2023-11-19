import Image from "next/image";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

import { Skeleton } from "@/components/ui/skeleton";

export const HomeHero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-orange-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-orange-300">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="pb-20 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <p className="z-30 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
              Welcome
            </p>
            <div className="z-30 mx-auto mt-6 w-full max-w-lg text-center md:max-w-2xl lg:max-w-none lg:text-left">
              <h1 className="text-4xl font-extrabold text-stone-700 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Let’s make your product a{" "}
                <p className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                  success
                </p>
              </h1>
              <p className="mt-6 text-xl text-stone-700">
                Archipielago is your partner in digital innovation. We fuse
                strategic thinking with standout design and development to
                deliver uniquely tailored solutions.
              </p>
            </div>

            <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start">
              <PrimaryButton href="/contact">Let's get started</PrimaryButton>
              <SecondaryButton
                className="ml-0 mt-5 sm:ml-4 sm:mt-0"
                href="/services"
              >
                Learn more
              </SecondaryButton>
            </div>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none invisible lg:visible lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        {/* <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        /> */}
                      </div>
                      <div className="h-64 w-44 place-self-end overflow-hidden rounded-lg">
                        <Skeleton
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="400"
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        {/* <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        /> */}
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Skeleton
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        {/* <img
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="800"
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        /> */}
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Skeleton
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="0"
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Skeleton
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="600"
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

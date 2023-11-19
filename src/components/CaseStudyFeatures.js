import Image from "next/image";
import clsx from "clsx";

import { Skeleton } from "@/components/ui/skeleton";

export const CaseStudyFeatures = ({ data }) => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:pb-24 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* Section text */}
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
            {data.tagline}
          </p>
          <h2 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
            {data.headline}
          </h2>
          <p className="mt-6 text-xl text-stone-700">{data.text}</p>
        </div>
        {data.features.map((feature, index) => (
          <div
            key={`case-study-feature-${index}`}
            className={clsx(
              "relative lg:grid lg:auto-rows-max lg:grid-cols-2 lg:gap-x-12",
              index === 0 ? "mt-12 lg:mt-20" : "mt-16 sm:mt-24 lg:mt-32",
            )}
          >
            {/* Feature text */}
            <div
              className={clsx(
                "flex flex-col items-center justify-center lg:items-start",
                index % 2 === 1 && "lg:order-2",
              )}
            >
              <div className="w-full max-w-lg text-left md:max-w-2xl md:text-center lg:text-left">
                <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-xs font-medium tracking-wide text-stone-700">
                  {feature.tagline}
                </p>
                <h2 className="mt-4 text-2xl font-extrabold text-stone-700 sm:text-3xl md:text-4xl lg:mt-6">
                  {feature.headline}
                </h2>
                <p className="mt-4 text-lg text-stone-700 lg:mt-6">
                  {feature.text}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "relative mx-auto mt-10 flex w-full max-w-lg items-center justify-center lg:mt-0 lg:max-w-none",
                index % 2 === 1 && "lg:order-1",
              )}
            >
              <div
                className={clsx(
                  "absolute h-full w-full rounded-3xl bg-orange-300 sm:top-8 lg:top-4 2xl:top-10",
                  index % 2 === 0
                    ? "sm:left-8 lg:left-4 2xl:left-10"
                    : "sm:right-8 lg:right-4 2xl:right-10",
                )}
              >
                <svg
                  className="absolute inset-y-0 right-1/4 top-0 z-20 h-full w-1/4 text-orange-300"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                  fill="currentcolor"
                >
                  <polygon points="0,0 100,0 0,100" />
                </svg>
                <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-orange-200" />
              </div>
              <div className="aspect-h-2 aspect-w-3 relative w-full">
                {/* Feature image */}
                <Skeleton
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="absolute inset-0 z-30 h-full w-full rounded-3xl object-cover shadow-xl"
                  sizes="(min-width: 1280px) 38.5rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

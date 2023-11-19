import Image from "next/image";
import clsx from "clsx";

import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { getAllCaseStudies } from "@/lib/caseStudies";

import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedWork = () => {
  const caseStudies = getAllCaseStudies().filter(
    (caseStudy) => caseStudy.featured,
  );

  return (
    <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-56 lg:pb-24">
      {caseStudies.map((caseStudy, index) => (
        <div
          key={`featured-case-study-${index}`}
          className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div
            className={clsx(
              "relative h-64 w-full rounded-t-3xl bg-cover bg-center shadow-xl lg:h-full lg:w-[90%] lg:rounded-3xl lg:pt-[46%]",
              index % 2 === 1 && "lg:ml-auto",
            )}
          >
            <Skeleton
              src={caseStudy.image}
              alt={caseStudy.name}
              className="absolute inset-0 h-full w-full rounded-t-3xl object-cover object-center lg:rounded-3xl"
              fill
              sizes="(min-width: 1280px) 72rem, (min-width: 1024px) 90vw, (min-width: 640px) 32rem, calc(100vw - 2rem)"
            />
            <p className="ml-6 mt-4 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-200 to-white px-6 py-2 text-xs font-medium tracking-wide text-stone-700 sm:ml-8 lg:hidden">
              {caseStudy.category}
            </p>
          </div>
          <div
            className={clsx(
              "relative bottom-0 z-20 block h-auto w-full rounded-b-3xl bg-orange-300 p-6 shadow-xl sm:p-8 lg:absolute lg:-bottom-25 lg:h-full lg:w-1/3 lg:rounded-3xl lg:p-12",
              index % 2 === 0 ? "right-0" : "left-0",
            )}
          >
            <div className="h-full lg:flex lg:flex-col lg:justify-between">
              <div className="hidden lg:block">
                <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-200 to-white px-6 py-2 text-xs font-medium tracking-wide text-stone-700">
                  {caseStudy.category}
                </p>
              </div>
              <div className="flex w-full flex-wrap">
                <h3 className="text-3xl font-bold text-stone-700 lg:text-4xl">
                  {caseStudy.name}
                </h3>
                <p className="mt-2 text-base text-stone-700 md:text-lg lg:mt-4">
                  {caseStudy.shortDescription}
                </p>
              </div>
              <div className="mt-8 flex xl:mt-4">
                <SecondaryButton size="sm" href={`/work/${caseStudy.slug}`}>
                  Case study
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

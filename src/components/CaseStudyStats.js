import clsx from "clsx";

import { SecondaryButton } from "@/components/buttons/SecondaryButton";

export const CaseStudyStats = ({ data }) => {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* Key stats card */}
        <div className="relative rounded-3xl bg-orange-300 py-16 shadow-xl lg:py-20">
          {/* Right background diagonal */}
          <svg
            className="absolute inset-y-0 right-1/4 top-0 z-20 h-full w-1/4 text-orange-300"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="currentcolor"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
          <div className="absolute inset-y-0 left-1/2 z-10 h-full w-1/2 rounded-r-3xl bg-orange-200" />

          {/* Card content */}
          <div className="relative z-30 mx-auto flex flex-col items-center justify-center px-4 text-center lg:px-16 lg:text-left">
            {/* Card header text */}
            <div className="relative mx-auto max-w-screen-md text-center">
              <p className="z-30 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-200 to-white px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
                {data.tagline}
              </p>
              <h3 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl">
                {data.headline}
              </h3>
              <p className="mt-6 text-xl text-stone-700">{data.text}</p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex w-full flex-wrap justify-center text-center md:mt-12 lg:-mx-4">
              {data.stats.slice(0, 3).map((stat, index) => (
                <div
                  key={`case-study-stat-${index}`}
                  className={clsx(
                    "relative w-full px-4 md:w-1/3 lg:px-8",
                    index > 0 && "mt-8 md:mt-0",
                  )}
                >
                  <p className="text-center text-5xl font-extrabold text-stone-700">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-lg font-medium text-stone-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Link to site */}
            <div className="mt-12 flex w-full justify-center lg:mt-16">
              <SecondaryButton href={data.action.href}>
                {data.action.label}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

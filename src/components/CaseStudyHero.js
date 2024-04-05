import Image from "next/image";
import { Icon } from "@/components/Icon";

import { Skeleton } from "@/components/ui/skeleton";

export const CaseStudyHero = ({ data }) => {
  console.log(data.hero.keyPoints);
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* Hero text */}
        <div className="mx-auto w-full max-w-3xl text-center lg:max-w-5xl">
          <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
            {data.hero.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-stone-700 sm:text-5xl md:mt-5 md:text-6xl">
            {data.hero.headline}
          </h1>
        </div>
        {/* Features container */}
        <div className="mx-auto mt-12 grid w-full max-w-lg gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-12">
          {data.hero.keyPoints.slice(0, 3).map((item, index) => (
            <div key={`case-study-key-point-${index}`} className="w-full">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-300 shadow-xl">
                <Icon name={item.icon} className="h-9 w-9 text-stone-700" />
              </span>
              <h3 className="mt-5 text-center text-2xl font-semibold text-stone-700">
                {item.label}
              </h3>
              {item.text.map ? (
                item.text.map((item, index) => (
                  <p
                    key={`case-study-key-point-text-${index}`}
                    className="mt-2 text-center text-lg leading-relaxed text-stone-700"
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p
                  key={`case-study-key-point-text-${index}`}
                  className="mt-2 text-center text-lg leading-relaxed text-stone-700"
                >
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Hero image */}
        <div className="aspect-h-1 aspect-w-2 relative mx-auto mt-12 rounded-3xl shadow-xl lg:mt-16">
          <Skeleton
            className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center align-middle"
            fill
            src={data.image}
            alt={data.name}
            sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), calc(100vw - 3rem), calc(100vw - 2rem)"
          />
        </div>
      </div>
    </section>
  );
};

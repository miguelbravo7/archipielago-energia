import Image from "next/image";
import clsx from "clsx";

import { Icon } from "@/components/Icon";

import { Skeleton } from "@/components/ui/skeleton";

import portraitImage from "/public/stock/what-we-do-image-01.jpg";
import squareImage1 from "/public/stock/what-we-do-image-02.jpg";
import squareImage2 from "/public/stock/what-we-do-image-03.jpg";

const services = [
  {
    label: "Web Design",
    description:
      "We craft visually stunning, unforgettable experiences with responsive design at the forefront.",
    icon: "artboard",
  },
  {
    label: "Web Development",
    description:
      "We excell at converting eye-catching designs into high-functioning, user-friendly web applications.",
    icon: "code",
  },
  {
    label: "Maintenance & Optimization",
    description:
      "We ensure your site remains an effective, optimized tool for your business needs, goals and growth.",
    icon: "tool",
  },
];

export const ServicesOverview = () => {
  return (
    <>
      {/* Section text */}
      <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-screen-xl lg:text-left">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
          What we do
        </p>
        <div className="mt-6 grid w-full gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
              We create digital products that help you get ahead
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-stone-700">
              From fresh ideas to fully-realized designs, we cover every aspect
              of your digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* Section content */}
      <div className="mx-auto mt-12 grid w-full justify-center gap-12 lg:mt-16 lg:max-w-screen-xl lg:grid-cols-2 lg:justify-start lg:gap-8 xl:max-w-screen-xl">
        {/* Features list */}
        <div>
          {/* Item */}
          {services.slice(0, 3).map((service, index) => (
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              key={`service-${index}`}
              className={clsx(
                "w-full",
                index === 1 &&
                  "mt-8 lg:mt-5 xl:mt-8 xl:pr-18 2xl:mt-10 2xl:pr-28",
                index === 2 && "mt-8 lg:mt-5 xl:mt-8 2xl:mt-10",
              )}
            >
              <div className="mx-auto max-w-lg lg:mr-auto xl:mx-auto">
                <div className="relative flex w-full rounded-3xl bg-white px-8 py-6 shadow-md shadow-orange-500/30 sm:px-10">
                  <div className="text-center sm:flex sm:text-left">
                    <div className="w-full sm:w-1/5">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-300 to-orange-400 sm:mx-0">
                        <Icon
                          name={service.icon}
                          className="h-6 w-6 text-stone-700"
                        />
                      </div>
                    </div>
                    <div className="mt-3 w-full sm:mt-0">
                      <h5 className="text-lg font-semibold text-stone-700">
                        {service.label}
                      </h5>
                      <p className="mt-1 text-base text-stone-700">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Image collage */}
        <div className="flex max-w-screen-md items-center justify-center lg:max-w-full">
          <div className="grid h-full w-full grid-flow-col grid-rows-2 gap-4">
            <div className="relative row-span-2 rounded-3xl shadow-xl">
              <Skeleton
                src={portraitImage}
                alt="Office work"
                className="h-full w-full rounded-3xl object-cover object-right"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative rounded-3xl shadow-xl">
              <Skeleton
                src={squareImage1}
                alt="More office work"
                className="h-full w-full rounded-3xl object-cover object-center"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
            <div className="relative rounded-3xl shadow-xl">
              <Skeleton
                src={squareImage2}
                alt="Group brainstorming"
                className="h-full w-full rounded-3xl object-cover object-center"
                sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

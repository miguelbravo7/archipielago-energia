"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { Icon } from "@/components/Icon";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

export const ArchivedCaseStudies = ({ caseStudies, categories }) => {
  const [archivedCaseStudies, setArchivedCaseStudies] = useState(
    caseStudies.filter((caseStudy) => !caseStudy.featured),
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setArchivedCaseStudies(
      selectedCategory === "all"
        ? caseStudies
        : caseStudies.filter(
            (caseStudy) => caseStudy.category === selectedCategory,
          ),
    );
  }, [selectedCategory, caseStudies]);

  function CaseStudy({ caseStudy }) {
    const caseStudyPath = `/work/${caseStudy.slug}`;

    return (
      <div className="mx-auto max-w-lg rounded-3xl bg-orange-300 shadow-xl">
        <Link href={caseStudyPath}>
          <div className="relative h-64 w-full rounded-t-3xl bg-cover bg-center">
            <Image
              src={caseStudy.image}
              alt={caseStudy.name}
              fill
              className="h-full w-full rounded-t-3xl object-cover object-center"
              sizes="(min-width: 1280px) 28.5rem, (min-width: 1024px) 37.5vw, (min-width: 640px) 32rem, calc(100vw - 2rem)"
            />
            <p className="ml-6 mt-4 inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-300 to-orange-200 px-6 py-2 text-xs font-medium tracking-wide text-stone-700 lg:ml-4 xl:ml-6">
              {caseStudy.category}
            </p>
          </div>
        </Link>

        <div className="w-full p-6 lg:p-4 xl:p-6">
          <div className="flex w-full flex-wrap">
            <div className="flex w-1/2 items-center justify-start">
              <Icon name="calendar" className="h-5 w-5 text-stone-600" />

              <div className="ml-2 text-base font-medium leading-6 text-stone-600">
                {caseStudy.date}
              </div>
            </div>
            <div className="flex w-1/2 justify-end space-x-1">
              {caseStudy.stack.map((tech, j) => (
                <Icon
                  name={tech.tech}
                  className="h-6 w-6 text-stone-600"
                  key={`caseStudy-${caseStudy.name}-tech-stack-${j}`}
                />
              ))}
            </div>
          </div>
          <Link href={caseStudyPath}>
            <h3 className="mt-6 text-xl font-semibold leading-6 text-stone-700 md:text-2xl">
              {caseStudy.name}
            </h3>
          </Link>

          <p className="mt-1 text-base leading-relaxed text-stone-700">
            {caseStudy.shortDescription}
          </p>
          <div className="mt-8 flex">
            <SecondaryButton size="sm" href={caseStudyPath}>
              Case study
            </SecondaryButton>
          </div>
        </div>
      </div>
    );
  }

  function Filters() {
    return (
      <div className="order-1 md:order-2 md:col-span-3">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-stone-700">Filter Projects</h3>

          {/* Filters container */}
          <div className="mt-3 flex flex-wrap justify-center space-x-3 space-y-3 md:mt-6 md:flex-col md:justify-start md:space-x-0">
            {/* Filter */}
            <div className="ml-3 mt-3 md:m-0">
              <button
                className={clsx(
                  "inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-medium tracking-wide text-stone-700 md:text-base",
                  selectedCategory == "all"
                    ? "bg-orange-300"
                    : "bg-orange-400 duration-200 ease-in-out hover:bg-orange-300",
                )}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>
            </div>

            {/* Filter */}
            {categories.map((category, index) => {
              return (
                <div key={`category-${index}`}>
                  <button
                    className={clsx(
                      "inline-flex items-center justify-center rounded-r-full rounded-tl-full px-6 py-2 text-sm font-bold tracking-wide text-stone-700 md:text-base",
                      selectedCategory == category
                        ? "bg-orange-300"
                        : "bg-orange-400 duration-200 ease-in-out hover:bg-orange-300",
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Section text */}
      <div className="mx-auto max-w-xl text-center md:max-w-2xl lg:max-w-screen-xl lg:text-left">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
          Explore
        </p>
        <div className="mt-6 grid w-full gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold leading-tight text-stone-700 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Filter through hundreds of our projects by industry
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xl text-stone-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
              mod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div className="mx-auto mt-10 max-w-screen-xl md:mt-12 lg:mt-16">
        <div className="grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Projects container */}
          <div className="order-2 mt-12 overflow-hidden md:order-1 md:col-span-9 md:mt-0">
            {/* Projects container */}
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
              {archivedCaseStudies.map((caseStudy, index) => (
                <CaseStudy
                  key={`archived-case-study-${index}`}
                  caseStudy={caseStudy}
                />
              ))}
            </div>
          </div>

          {/* Filters */}
          <Filters />
        </div>
      </div>
    </section>
  );
};

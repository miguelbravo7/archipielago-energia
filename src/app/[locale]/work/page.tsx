import { FeaturedWork } from "@/components/FeaturedWork";
import { ArchivedCaseStudies } from "@/components/ArchivedCaseStudies";
import { CallToAction } from "@/components/CallToAction";

import { getAllCaseStudies, getCaseStudyCategories } from "@/lib/caseStudies";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Our work - Archipielago",
  description:
    "Archipielago has worked with a large array of clients in various industries: Consumer goods, fashion, b2b, entertainment, etc.",
};

export default function CaseStudiesPage() {
  const t = useTranslations("blog");
  const caseStudies = getAllCaseStudies(t);
  const categories = getCaseStudyCategories(t);

  return (
    <>
      {/* Featured work wrapper */}
      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          {/* Hero header */}
          <div className="mx-auto w-full max-w-3xl text-center lg:max-w-5xl">
            <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
              Our work
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-stone-700 sm:text-5xl md:mt-5 md:text-6xl">
              Check out some of our recent work
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-xl text-stone-700 md:mt-5 md:max-w-3xl">
              Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
              dapibus. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus.
            </p>
          </div>

          {/* Featured work */}
          <FeaturedWork />
        </div>
      </section>

      <ArchivedCaseStudies caseStudies={caseStudies} categories={categories} />

      <CallToAction />
    </>
  );
}

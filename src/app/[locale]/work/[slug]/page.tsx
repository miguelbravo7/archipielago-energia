import { CaseStudyHero } from "@/components/CaseStudyHero";
import { AboutCaseStudy } from "@/components/AboutCaseStudy";
import { CaseStudyStats } from "@/components/CaseStudyStats";
import { CaseStudyFeatures } from "@/components/CaseStudyFeatures";
import { CallToAction } from "@/components/CallToAction";

import { getCaseStudy, getAllCaseStudies } from "@/lib/caseStudies";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { slug, locale } }) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const caseStudy = getCaseStudy(t, slug);

  return {
    title: `${caseStudy.name} - Archipielago`,
    description: caseStudy.shortDescription,
  };
}

export default function CaseStudyPage({ params: { slug } }) {
  const t = useTranslations("blog");
  const caseStudy = getCaseStudy(t, slug);

  return (
    <>
      {caseStudy?.hero && (
        <CaseStudyHero
          translations={caseStudy.hero}
          image={caseStudy.image}
          imageName={caseStudy.name}
        />
      )}
      {caseStudy?.about && <AboutCaseStudy translation={caseStudy.about} />}
      {/* {caseStudy?.statsSection && (
        <CaseStudyStats data={caseStudy.statsSection} />
      )}*/}
      {caseStudy?.featuresSection && (
        <CaseStudyFeatures translation={caseStudy.featuresSection} />
      )}
      <CallToAction />
    </>
  );
}

export const dynamicParams = false;

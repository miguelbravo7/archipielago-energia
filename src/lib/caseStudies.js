import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getCaseStudy(slug) {
  if (!getCaseStudy[slug]) {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src/case-studies", slug + ".md"),
      "utf-8",
    );

    const { data } = matter(markdownWithMeta);
    getCaseStudy[slug] = data;
  }

  return getCaseStudy[slug];
}

export function getAllCaseStudies() {
  if (!getAllCaseStudies.response) {
    const files = fs.readdirSync(path.join(process.cwd(), "src/case-studies"));

    getAllCaseStudies.response = files.map((filename) => {
      const fileContents = fs.readFileSync(
        path.join(process.cwd(), "src/case-studies", filename),
        "utf8",
      );

      const { data } = matter(fileContents);

      return { ...data, slug: filename.replace(".md", "") };
    });
  }

  return getAllCaseStudies.response;
}

export function getCaseStudyCategories() {
  const caseStudies = getAllCaseStudies();
  const uniqueCategories = [
    ...new Set(caseStudies.map((caseStudy) => caseStudy.category)),
  ];

  return uniqueCategories;
}

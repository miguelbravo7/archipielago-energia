export type BlogEntryPreview = {
  slug: string;
  category: string[];
  image: string;
  featured?: boolean;
  date: string;
  name: string;
  shortDescription: string;
};

export type BlogEntry = {
  hero: {
    tagline: string;
    headline: string;
    keyPoints: {
      label: string;
      text: string[];
      icon: string;
    }[];
  };
  about: {
    tagline: string;
    text: string;
  };
  statsSection: {
    tagline: string;
    headline: string;
    text: string;
    action: {
      href: string;
      label: string;
    };
    stats: {
      label: string;
      value: number | string;
    }[];
  };
  featuresSection: {
    tagline: string;
    headline: string;
    text: string;
    features: {
      tagline: string;
      headline: string;
      text: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
    about: {
      tagline: string;
      text: string;
    };
  };
} & BlogEntryPreview;

function generateBlogEntry(
  target,
  baseNamespace,
  configParams: {
    categories: number[];
    keyPoints: { [key: number]: number[] };
    stats: number[];
    featureSectionFeatures: number[];
  },
  t,
) {
  let namespace = baseNamespace;
  for (const key of ["name", "shortDescription", "date"]) {
    target[key] = t(`${namespace}.${key}`);
  }

  namespace = baseNamespace + ".category";
  for (const index of configParams.categories) {
    target.category.push(t(`${namespace}.${index}`));
  }

  namespace = baseNamespace + ".hero";
  for (const key of ["tagline", "headline"]) {
    target.hero[key] = t(`${namespace}.${key}`);
  }

  namespace = baseNamespace + ".hero.keyPoints";
  for (const [key, value] of Object.entries(configParams.keyPoints)) {
    const keyPoint = {
      label: t(`${namespace}.${key}.label`),
      icon: t(`${namespace}.${key}.icon`),
      text: [],
    };

    for (const subIndex of value) {
      keyPoint.text.push(t(`${namespace}.${key}.text.${subIndex}`));
    }
  }

  namespace = baseNamespace + ".about";
  for (const key of ["tagline", "text"]) {
    target.about[key] = t(`${namespace}.${key}`);
  }

  /*
    // TODO: used in stats section, currently not in use
    for (const key of ["tagline", "headline", "text", "action", "stats"]) {
      target[key] = t(`${namespace}.${key}`);
    }
  namespace = baseNamespace + ".action";

  for (const key of ["href", "label"]) {
    target.action[key] = t(`${namespace}.${key}`);
  }

  namespace = baseNamespace + ".stats";
  for (const index of configParams.stats) {
  }
  */

  namespace = baseNamespace + ".featuresSection";
  for (const key of ["tagline", "headline", "text"]) {
    target[key] = t(`${namespace}.${key}`);
  }

  namespace = baseNamespace + ".featuresSection.features";
  for (const index of configParams.featureSectionFeatures) {
    target.featuresSection.features[index] = {
      tagline: t(`${namespace}.${index}.tagline`),
      headline: t(`${namespace}.${index}.headline`),
      text: t(`${namespace}.${index}.text`),
      image: {
        src: t(`${namespace}.${index}.image.src`),
        alt: t(`${namespace}.${index}.image.alt`),
      },
    };
  }
}

const blogEntryMapper = {
  bateria_agm: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2, 3],
      keyPoints: { 0: [0, 1, 2], 1: [0] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2, 3],
    };
    const result = {
      slug: "bateria_agm",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: true,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_agm";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  bateria_estacionaria: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2, 3],
      keyPoints: { 0: [0, 1, 2, 3, 4], 1: [0, 1, 2] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2, 3],
    };
    const result = {
      slug: "bateria_estacionaria",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_estacionaria";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  bateria_gel: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2, 3],
      keyPoints: { 0: [0, 1, 2, 3, 4, 5], 1: [0, 1] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2, 3],
    };
    const result = {
      slug: "bateria_gel",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_gel";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  bateria_litio: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2],
      keyPoints: { 0: [0, 1, 2, 3, 4], 1: [0] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2, 3],
    };
    const result = {
      slug: "bateria_litio",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_litio";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  bateria_plomo_abierto: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2, 3],
      keyPoints: { 0: [0, 1], 1: [0, 1, 2, 3] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2, 3],
    };
    const result = {
      slug: "bateria_plomo_abierto",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_plomo_abierto";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  bateria_virtual: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2],
      keyPoints: { 0: [0, 1, 2, 3], 1: [0] },
      stats: [0, 1, 2, 3, 4],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "bateria_virtual",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "bateria_virtual";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  inversores: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0, 1, 2, 3],
      keyPoints: { 0: [0], 1: [0], 2: [0] },
      stats: [0, 1, 2],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "inversores",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "inversores";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  paneles_bifaciales: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0],
      keyPoints: { 0: [0, 1], 1: [0, 1] },
      stats: [0, 1],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "paneles_bifaciales",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "paneles_bifaciales";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  paneles_flexibles: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0],
      keyPoints: { 0: [0, 1], 1: [0, 1] },
      stats: [0, 1],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "paneles_flexibles",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "paneles_flexibles";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  paneles_monocristalinos: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0],
      keyPoints: { 0: [0, 1, 2], 1: [0, 1] },
      stats: [0, 1],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "paneles_monocristalinos",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "paneles_monocristalinos";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
  paneles_policristalinos: (t: (...args: any) => string) => {
    const configParams = {
      categories: [0],
      keyPoints: { 0: [0, 1], 1: [0, 1] },
      stats: [0, 1],
      featureSectionFeatures: [0, 1, 2],
    };
    const result = {
      slug: "paneles_policristalinos",
      category: [],
      image: "/stock/work/featured-work-image-01.jpg",
      featured: false,
      hero: {
        keyPoints: [],
      },
      featuresSection: {
        features: [],
      },
      about: {},
      statsSection: {
        action: {},
        stats: [],
      },
    } as BlogEntry;
    const baseNamespace = "paneles_policristalinos";
    generateBlogEntry(result, baseNamespace, configParams, t);
    return result;
  },
};

export function getCaseStudy(t, slug): BlogEntry {
  if (t) {
    return blogEntryMapper[slug](t);
  }
}

export function getAllCaseStudies(t: (...args: any) => any): BlogEntry[] {
  const blogEntries: BlogEntry[] = [];
  if (t) {
    for (const [key, value] of Object.entries(blogEntryMapper)) {
      blogEntries.push(value(t));
    }
  }
  return blogEntries;
}

export function getCaseStudyCategories(t: any): string[] {
  const caseStudies = getAllCaseStudies(t);
  const uniqueCategories = caseStudies
    .map((caseStudy) => caseStudy.category)
    .flat()
    .filter((value, index, array) => array.indexOf(value) === index);
  return uniqueCategories;
}

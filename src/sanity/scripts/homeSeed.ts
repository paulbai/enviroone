export interface HomeHeroSeed {
  headline: string;
  accentText: string;
  pillText: string;
  damagedImageFile: string;
  damagedImageAlt: string;
  restoredImageFile: string;
  restoredImageAlt: string;
  heroChildrenImageFile?: string;
  heroChildrenImageAlt?: string;
}

export interface FocusAreasIntroSeed {
  heading: string;
  description: string;
}

export interface ImpactDownloadSeed {
  title: string;
  description: string;
  buttonLabel: string;
  pdfFile: string;
}

export const homeHeroSeed: HomeHeroSeed = {
  headline: "All It Takes Is Three",
  accentText: "Is Three",
  pillText: "Food • Health • Knowledge",
  damagedImageFile: "images/hero-children.jpg",
  damagedImageAlt: "Children in Sierra Leone",
  restoredImageFile: "images/restored-landscape-new.jpg",
  restoredImageAlt: "Restored Green Valley Landscape",
  heroChildrenImageFile: "images/hero-children.jpg",
  heroChildrenImageAlt: "Children in Sierra Leone",
};

export const focusAreasIntroSeed: FocusAreasIntroSeed = {
  heading: "Our Focus Areas.",
  description:
    "EnviroOne helps communities in Sierra Leone and beyond adapt to climate change by advancing agroecology, clean water access, and environmental education.",
};

export const impactDownloadSeed: ImpactDownloadSeed = {
  title: "See Our Full Impact Report",
  description:
    "Download our comprehensive impact report to learn more about the communities we serve and the lasting change we're creating together.",
  buttonLabel: "Download",
  pdfFile: "EnviroOne-Impact.pdf",
};

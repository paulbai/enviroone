export interface FocusAreaSeed {
  title: string;
  description: string;
  imageFile: string;
  imageAlt: string;
  link: {
    kind: "internal" | "external";
    href: string;
  };
  align: "left" | "right";
}

export const focusAreasSeed: FocusAreaSeed[] = [
  {
    title: "Regenerative Agriculture",
    description:
      "Restoring soil health and strengthening community resilience through sustainable farming practices that nurture harmony with nature.",
    imageFile: "projects/regenerative_ag_new.png",
    imageAlt: "Focus Area: Regenerative Agriculture",
    link: { kind: "internal", href: "/projects/agriculture" },
    align: "left",
  },
  {
    title: "Water Well Program",
    description:
      "Providing critical access to clean water for districts across Sierra Leone, reducing disease and empowering communities.",
    imageFile: "projects/water_well_new_hero.jpg",
    imageAlt: "Focus Area: Water Well Program",
    link: { kind: "internal", href: "/projects/clean-water" },
    align: "right",
  },
  {
    title: "Education Program",
    description:
      "Building a knowledgeable foundation for the future by integrating agriculture and clean water awareness into rural learning.",
    imageFile: "projects/education.jpg",
    imageAlt: "Focus Area: Education Program",
    link: { kind: "internal", href: "/projects/education" },
    align: "left",
  },
];

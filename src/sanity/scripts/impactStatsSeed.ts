export type ImpactStatIcon =
  | "droplet"
  | "users"
  | "leaf"
  | "book-open"
  | "sprout"
  | "map-pin"
  | "sun"
  | "heart"
  | "activity";

export type ImpactStatGridSpan = "small" | "medium" | "large";

export type ImpactStatAccent =
  | "water"
  | "forest"
  | "golden"
  | "terracotta"
  | "warmGray"
  | "forest-water"
  | "forest-golden"
  | "terracotta-golden"
  | "water-forest";

export interface ImpactStatSeed {
  value: number;
  suffix: string;
  label: string;
  icon: ImpactStatIcon;
  gridSpan: ImpactStatGridSpan;
  accent: ImpactStatAccent;
}

// Source: src/components/home/ImpactStats.tsx (rows 1-3).
// gridSpan derived from md:col-span-X: >=5 large, ==4 medium, <=3 small.
// accent derived from the gradient string.
export const impactStatsSeed: ImpactStatSeed[] = [
  // Row 1
  {
    value: 30,
    suffix: "+",
    label: "Water Wells Built",
    icon: "droplet",
    gridSpan: "medium", // col-span-4
    accent: "water",
  },
  {
    value: 105000,
    suffix: "+",
    label: "People Provided with Clean Water",
    icon: "users",
    gridSpan: "large", // col-span-5
    accent: "forest-water",
  },
  {
    value: 20,
    suffix: "+",
    label: "Hectares Cultivated",
    icon: "leaf",
    gridSpan: "small", // col-span-3
    accent: "terracotta",
  },
  // Row 2
  {
    value: 10,
    suffix: "",
    label: "Peer Facilitators Trained",
    icon: "book-open",
    gridSpan: "small", // col-span-3
    accent: "golden",
  },
  {
    value: 500,
    suffix: "+",
    label: "Farmers Supported with Seeds & Tools",
    icon: "sprout",
    gridSpan: "large", // col-span-6
    accent: "forest-golden",
  },
  {
    value: 3,
    suffix: "",
    label: "Districts Served (Tonkolili, Port Loko, Waterloo)",
    icon: "map-pin",
    gridSpan: "small", // col-span-3
    accent: "warmGray",
  },
  // Row 3
  {
    value: 100,
    suffix: "+",
    label: "Youth & Women Trained",
    icon: "sun",
    gridSpan: "large", // col-span-5
    accent: "terracotta-golden",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Access to Clean Water & Medicine",
    icon: "heart",
    gridSpan: "medium", // col-span-4
    accent: "water-forest",
  },
  {
    value: 60,
    suffix: "%",
    label: "Reduction in Water Collection Time",
    icon: "activity",
    gridSpan: "small", // col-span-3
    accent: "forest",
  },
];

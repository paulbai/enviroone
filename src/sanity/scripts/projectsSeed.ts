export interface CarouselSlideSeed {
  src: string; // either a /public path like "/projects/foo.png" OR an absolute https URL
  caption: string;
  linkVideoId?: string;
}

export interface ProjectPageSeed {
  slug: string;
  title: string;
  icon: "sprout" | "droplet" | "book-open";
  accent: "forest" | "water" | "golden";
  summary: string;
  cardImageSrc: string;
  cardImageAlt: string;
  bodyHtml: string;
  carousel: CarouselSlideSeed[];
  featuredVideoId?: string;
  featuredVideoLabel?: string;
}

export const projectsIndexSeed = {
  heading: "Our Projects",
  description:
    "Since 2011, EnviroOne has been implementing programs that have impacted lives in Sierra Leone through Education, Clean Water via our Well Drilling Program, and Agriculture.",
};

export const projectPagesSeed: ProjectPageSeed[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    icon: "sprout",
    accent: "forest",
    summary:
      "Promoting regenerative oil palm agroforestry and intercropping systems to restore soil health, increase biodiversity, and stabilize livelihoods.",
    cardImageSrc:
      "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066598577-SB569IPL748R3CKL8P02/Plantation.jpg",
    cardImageAlt: "Agriculture program",
    bodyHtml: `<h3>Regenerative Agriculture & Oil Palm Production</h3><p>Sierra Leone’s agricultural sector faces significant challenges, including soil degradation and limited market access. Since 2017, EnviroOne has been transforming this landscape by promoting regenerative oil palm agroforestry. This approach restores soil health, increases biodiversity, and stabilizes livelihoods in the Tonkolili and Port Loko districts.</p><p><strong>Innovation & Expansion:</strong> Expanding this success, since 2023, we have integrated the intercropping of cassava and native medicinal plants within oil palm systems. This innovative model taps into the region’s deep traditional healing knowledge, diversifying income while addressing rural health challenges. Operations have now expanded to include two rural communities in <strong>Makeni Roc Fola</strong> (Tonkolili District) and one community in <strong>Lungi</strong>.</p><h4>Program Impact</h4><ul><li><strong>20+ hectares</strong> under palm cultivation intercropped with cassava and medicinal plants.</li><li><strong>500+ farmers</strong> in Tonkolili and Port Loko benefiting from the program.</li><li><strong>Increased biodiversity</strong> and soil fertility across palm-based farms.</li><li><strong>Enhanced community access</strong> to herbal health resources and safe traditional remedies.</li><li><strong>Improved farmer incomes</strong> through diversified, climate-resilient livelihoods.</li><li><strong>Strengthened local knowledge</strong> on regenerative agriculture systems.</li></ul><h4>Traditional Medicine & Community Health Outcomes</h4><p>With over 70–80% of the rural population relying on traditional medicine, this initiative has started to yield early health outcomes:</p><ul><li><strong>Cultural Integration:</strong> Households increasingly use culturally familiar treatment plants (e.g., moringa, neem, ginger, bitter leaf).</li><li><strong>Access to Care:</strong> Reduced reliance on distant or costly health facilities for common ailments.</li><li><strong>Proactive Health:</strong> As herbal literacy grows, communities seek early care rather than waiting for illnesses to worsen.</li><li><strong>Trust:</strong> Community trust in herbal healers is strengthened with safety training and validation of remedies.</li></ul>`,
    carousel: [
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066148147-YOZYGO9QDSWRU1BN608H/07_EnviroOne%2BFarm%2BWorkers.jpg",
        caption: "Empowering Local Farmers",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066150950-J376GYS2WWYM6J1BQSPX/Community%2Bparticipation.jpg",
        caption: "Community-Led Growth",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745064747439-BY73ZBCXO1HQUGT4SJNE/Palm+w+cassava.jpg",
        caption: "Intercropping for Resilience",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066598577-SB569IPL748R3CKL8P02/Plantation.jpg",
        caption: "Revitalizing the Landscape",
      },
      {
        src: "/projects/agriculture_new_1.png",
        caption: "Harvesting Sustainability",
      },
      {
        src: "/projects/agriculture_new_2.png",
        caption: "Processing the Yield",
      },
      { src: "/projects/agriculture_new_6.png", caption: "Oil Palm Production" },
      { src: "/projects/agriculture_new_7.png", caption: "Tools for Success" },
    ],
  },
  {
    slug: "clean-water",
    title: "Clean Water",
    icon: "droplet",
    accent: "water",
    summary:
      "Providing safe, sustainable drinking water access to over 105,000 individuals through community-led well drilling and rehabilitation.",
    cardImageSrc:
      "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442695877-FUPC4GIABWCHTKSUVHW9/07+Irene+Water+Well.jpg",
    cardImageAlt: "Clean water program",
    bodyHtml: `<h3>Water for Life: A Holistic Approach</h3><p>EnviroOne believes that a healthy community is multidimensional. In rural Sierra Leone, access to clean water emerges as the most urgent foundation for physical health and economic vitality.</p><p>Since 2017, EnviroOne has dug <strong>over 30 water wells</strong>, providing clean drinking water to over <strong>105,000 individuals</strong> across the Tonkolili, Port Loko, and Bombali districts, as well as the Western Rural Area (Waterloo).</p><p>Our site selection prioritizes community need, hydrogeologic suitability, and strong community ownership to ensure sustainability.</p><h4>Program Impact</h4><ul><li><strong>Health:</strong> Significant decrease in waterborne illnesses (cholera, typhoid) and improved maternal/child health.</li><li><strong>Social:</strong> Reduced water collection burden on women and girls, leading to higher school attendance.</li><li><strong>Economic:</strong> Lower household medical spending and new opportunities for small-scale water-fed businesses.</li><li><strong>Agricultural:</strong> Year-round access for medicinal plants, agroforestry, and regenerative agriculture.</li><li><strong>Environmental:</strong> Reduced riverbank degradation and support for ecosystem health.</li></ul>`,
    carousel: [],
  },
  {
    slug: "education",
    title: "Education",
    icon: "book-open",
    accent: "golden",
    summary:
      "Integrating regenerative agriculture and clean water awareness to strengthen rural resilience and empower future generations.",
    cardImageSrc:
      "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745037760252-XLOA5VHZQVYLTKGNW2BZ/_Students.jpg",
    cardImageAlt: "Education program",
    bodyHtml: `<h3>Integrating Regenerative Agriculture & Clean Water Awareness</h3><p>EnviroOne’s education programming integrates regenerative agriculture and clean water awareness to strengthen rural resilience in Sierra Leone. Recognizing the interdependence of healthy soils and safe water on community health and food systems, this initiative empowers farmers, youth, and women with the knowledge and tools needed to restore ecosystems, improve water access, and promote behavioral change through participatory learning.</p><h4>Key Activities</h4><ul><li><strong>Participatory Training on Regenerative Agriculture:</strong> Agroforestry training for students and farmers.</li><li><strong>Water Well Management & Use:</strong> Training on retrofitting, pump dismantling, and clean water usage.</li><li><strong>Solar Lamp Campaign:</strong> In 2018, EnviroOne embarked on a successful special campaign to provide solar lamps to our farming communities and their school children. Partnering with SoLight Design, we raised funds to provide free solar lamps to 5 villages.</li></ul><h4>Impact</h4><ul><li>Over 100 smallholder farmers, youth, and women trained in regenerative agricultural practices.</li><li>Clean water education campaigns conducted in three communities.</li><li>Local educator capacity built by training 10 peer facilitators.</li><li>Improved crop yields and reduction in waterborne illnesses.</li></ul>`,
    carousel: [
      {
        src: "/projects/education_red_shirt_final.jpg",
        caption: "Community Health Education",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745037760252-XLOA5VHZQVYLTKGNW2BZ/_Students.jpg",
        caption: "Knowledge is Power",
      },
      {
        src: "/projects/education_green_hat_final.jpg",
        caption: "Supporting Local Farmers",
      },
      {
        src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1571087834979-WI13WMNMPFQQIAAT07Z7/03+Students+excited+for+lights.jpg",
        caption: "Study Hours Extended",
      },
      { src: "/projects/education_1.png", caption: "Classroom Engagement" },
      { src: "/projects/education_2.png", caption: "Building Foundations" },
    ],
    featuredVideoId: "fd93opqBc2E",
    featuredVideoLabel: "Watch: Lighting the Way Forward",
  },
];

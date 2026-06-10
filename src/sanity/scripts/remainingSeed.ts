export interface AboutPageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  missionHeading: string;
  missionBodyHtml: string;
  philosophyHeading: string;
  philosophyItems: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  accomplishmentsHeading: string;
  accomplishmentsItems: Array<{
    year?: string;
    title: string;
    description: string;
  }>;
}

export interface DonatePageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  optionsHeading: string;
  optionsIntro: string;
  donationOptions: Array<{
    title: string;
    description: string;
    amount?: string;
    link: string;
  }>;
}

export interface GetInvolvedPageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  waysHeading: string;
  waysIntro: string;
  waysToGive: Array<{
    title: string;
    description: string;
    imageFile: string;
    imageAlt: string;
    href: string;
    align: "left" | "right";
  }>;
}

export interface VolunteerPageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  rolesHeading: string;
  rolesIntro: string;
  roles: Array<{
    title: string;
    description: string;
    tasks: string[];
    imageFile: string;
    imageAlt: string;
    align: "left" | "right";
  }>;
}

export interface SponsorshipPageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  tiersHeading: string;
  tiersIntro: string;
  tiers: Array<{
    title: string;
    problem: string;
    solution: string;
    impact: string;
    cost: string;
    imageFile: string;
    imageAlt: string;
    donateLink: string;
    align: "left" | "right";
  }>;
}

export interface ChurchMinistryPageSeed {
  heroHeading: string;
  heroSubheading: string;
  heroImageFile: string;
  heroImageAlt: string;
  bodyHtml: string;
}

export interface SiteSettingsSeed {
  orgName: string;
  primaryEmail: string;
  sierraLeoneOffice: { address: string; phone: string };
  usaOffice: { address: string; phone: string };
  socials: {
    instagramUrl: string;
    twitterXUrl: string;
    facebookUrl: string;
    tumblrUrl: string;
    mailtoEmail: string;
  };
  footerResources: Array<{
    title: string;
    description?: string;
    fileSrc: string;
    openInNewTab: boolean;
  }>;
}

export const aboutPageSeed: AboutPageSeed = {
  heroHeading: "About EnviroOne",
  heroSubheading:
    "A 501(c)(3) non-profit advancing sustainable development by integrating food, health, and knowledge for the world's most underserved communities.",
  heroImageFile: "/images/restored-landscape.jpg",
  heroImageAlt: "Restored landscape in Sierra Leone",
  missionHeading: "Our Mission",
  missionBodyHtml: `
    <p>EnviroOne is a 501(c)(3) non-profit company organized in 2007 to promote sustainable environmental and agricultural activities in the US and the world. There are numerous aid programs to lift the underprivileged out of poverty. Yet, many of these programs have not fully achieved their intended purposes.</p>
    <p><strong>"Our mission is to demonstrate that a systems approach that integrates the three main components of human development (health/environment, food, and knowledge) is not only needed to improve the lives of people successfully, but also achievable."</strong></p>
    <p>This is a paradigm shift from the current piecemeal approach to human development. It is the basis of our "All It Takes Is Three" strategy.</p>
  `,
  philosophyHeading: "All It Takes Is Three",
  philosophyItems: [
    {
      title: "Food",
      description:
        "For the 70% of the world's poor who live in rural areas, agriculture is the main source of income. EnviroOne helps improve standard of living by training farmers and micro-financing production, moving them from subsistence farming to sustainable agro-business.",
      icon: "sprout",
    },
    {
      title: "Health",
      description:
        "The health of a community is directly linked to the quality of its environment. EnviroOne is helping to improve the environment of communities by implementing clean water programs where access to safe drinking water is a critical challenge.",
      icon: "droplet",
    },
    {
      title: "Knowledge",
      description:
        "Education builds the capacity of people to escape poverty. EnviroOne implements education programs in agriculture and micro-financing designed to build capacity, empowering the poor to succeed and improve their lives through knowledge.",
      icon: "book-open",
    },
  ],
  accomplishmentsHeading: "What We Are Doing",
  accomplishmentsItems: [
    {
      title: "Modern farming education",
      description:
        "Educating farmers on modern farming techniques and value chain improvement.",
    },
    {
      title: "Climate adaptation",
      description:
        "Helping farmers adapt to climate change impacts and move to large-scale business farming.",
    },
    {
      title: "Clean water",
      description:
        "Drilling water wells to improve health and environment.",
    },
    {
      title: "Empowering women",
      description:
        "Empowering women with livelihood skills in fruit and vegetable gardening.",
    },
    {
      title: "Micro-finance loans",
      description:
        "Implementing micro-finance loan programs for farmers, traders, and teachers.",
    },
  ],
};

export const donatePageSeed: DonatePageSeed = {
  heroHeading: "Your Generosity Transforms Lives",
  heroSubheading:
    "Every dollar you give helps provide clean water, sustainable agriculture, and education to communities in Sierra Leone.",
  heroImageFile: "/projects/clean_water_makeni_grid.jpg",
  heroImageAlt: "Donate to EnviroOne",
  optionsHeading: "Make Your Donation Today",
  optionsIntro:
    "Your secure donation provides clean water, sustainable agriculture, and education to communities in Sierra Leone. Every contribution makes a lasting impact.",
  donationOptions: [
    {
      title: "Donate Securely Now",
      description:
        "Make a one-time or recurring donation via our secure Zeffy payment page. 100% of your contribution goes to EnviroOne — Zeffy charges no platform fees.",
      amount: "Any amount",
      link: "https://www.zeffy.com/en-US/donation-form/your-generosity-transforms-lives",
    },
    {
      title: "Sustainable Farming",
      description:
        "Support regenerative agriculture practices that restore soil health and food security across Sierra Leone.",
      link: "https://www.zeffy.com/en-US/donation-form/your-generosity-transforms-lives",
    },
    {
      title: "Clean Water Access",
      description:
        "Provide safe drinking water to entire villages, reducing disease and saving lives.",
      link: "https://www.zeffy.com/en-US/donation-form/your-generosity-transforms-lives",
    },
    {
      title: "Education Programs",
      description:
        "Give children the gift of knowledge and a brighter future through quality education.",
      link: "https://www.zeffy.com/en-US/donation-form/your-generosity-transforms-lives",
    },
  ],
};

export const getInvolvedPageSeed: GetInvolvedPageSeed = {
  heroHeading: "Get Involved",
  heroSubheading:
    "Together, we can create lasting change. Choose how you want to make a difference today.",
  heroImageFile: "/images/get_involved_hero_new.jpg",
  heroImageAlt: "Get Involved",
  waysHeading: "Make an Impact.",
  waysIntro:
    "There are many ways to support our mission. Find the path that resonates with you and join us in building a better future.",
  waysToGive: [
    {
      title: "Become a Sponsor",
      description:
        "Partner with us to provide sustainable solutions to communities in need. Your sponsorship directly impacts lives through clean water, agriculture, and education projects.",
      imageFile: "/images/get_involved_sponsor_new.jpg",
      imageAlt: "Become a Sponsor",
      href: "/get-involved/sponsor",
      align: "left",
    },
    {
      title: "Volunteer",
      description:
        "Join our global network of passionate individuals. Whether on the ground in Sierra Leone or remotely, your skills and time can help drive our mission forward.",
      imageFile: "/images/get_involved_volunteer_new.png",
      imageAlt: "Volunteer",
      href: "/get-involved/volunteer",
      align: "right",
    },
    {
      title: "Church Ministry",
      description:
        "Connect your congregation with a cause that matters. We partner with churches to bring faith and works together for transformative community development.",
      imageFile: "/images/church_ministry_new.png",
      imageAlt: "Church Ministry",
      href: "/get-involved/church-ministry",
      align: "left",
    },
  ],
};

export const volunteerPageSeed: VolunteerPageSeed = {
  heroHeading: "Join Our Team",
  heroSubheading:
    "Whether you have hours, days, or months to give, your time and skills can change lives.",
  heroImageFile: "/images/volunteer_hero_new.png",
  heroImageAlt: "Volunteer",
  rolesHeading: "Volunteer With Us",
  rolesIntro:
    "We offer three main paths for getting involved — volunteer, intern, or become a paid Ambassador.",
  roles: [
    {
      title: "Volunteer Program",
      description:
        "EnviroOne has a sound volunteer program for all its projects. Students can also volunteer as interns. We offer opportunities to become paid Ambassadors, rewarding commitment and accomplishments with increased recognition.",
      tasks: [
        "Play active roles in setting project goals and implementation.",
        "Define procedures and timelines for community projects.",
        "Gain hands-on experience in sustainable development.",
        "Opportunity to transition into a paid Ambassador role.",
      ],
      imageFile: "/images/volunteer_program_woman.jpg",
      imageAlt: "Volunteer Program",
      align: "left",
    },
    {
      title: "Internship",
      description:
        "Our internship program offers hands-on work experience with a wide range of people and responsibilities, preparing you for future jobs. We encourage creativity and research opportunities with partner universities.",
      tasks: [
        "Marketing, Fundraising, and Web Development.",
        "Media, Communication, and IT/MIS.",
        "Field work in Agriculture, Clean Water, and Micro-finance.",
        "Mentorship from project managers and Ambassadors.",
      ],
      imageFile: "/projects/education_1.png",
      imageAlt: "Internship",
      align: "right",
    },
    {
      title: "Ambassador",
      description:
        "The EnviroOne Ambassador program spreads awareness about our impact on the poor and disadvantaged. Ambassadors act as representatives on specific projects and, in some cases, as project managers.",
      tasks: [
        "Acquire new volunteers, donors, and corporate partners.",
        "Develop and champion your own projects with web presence.",
        "Rally friends and family to support your specific cause.",
        "Interact and collaborate with fellow Ambassadors globally.",
      ],
      imageFile: "/images/ambassador-new.jpg",
      imageAlt: "Ambassador",
      align: "left",
    },
  ],
};

export const sponsorshipPageSeed: SponsorshipPageSeed = {
  heroHeading: "Become a Sponsor",
  heroSubheading:
    "Your contribution directly transforms lives. Choose a cause and make a lasting impact today.",
  heroImageFile: "/images/restored-landscape.jpg",
  heroImageAlt: "Sponsorship",
  tiersHeading: "Sponsorship Options",
  tiersIntro:
    "Pick a sponsorship that fits your generosity — every option creates lasting impact in rural Sierra Leone.",
  tiers: [
    {
      title: "Sponsor A Farm",
      problem:
        "Agriculture provides about half of Sierra Leone's GDP, yet 44% of people remain food-poor. Poverty forces many children to work on family farms instead of attending school.",
      solution:
        "EnviroOne helps farmers organize as Climate Smart Communities (CSCs), providing inputs, greenhouses with drip irrigation, and training to move from subsistence to business farming.",
      impact:
        "Your support increases crop production, creates jobs, and shifts farming from survival to a sustainable business, allowing parents to afford education for their children.",
      cost: "Consider a gift of at least $20/month to sponsor a farmer. Greenhouses packages start at $7,000.",
      imageFile: "/images/sponsor-a-farm-new.jpg",
      imageAlt: "Sponsor A Farm",
      donateLink:
        "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
      align: "left",
    },
    {
      title: "Sponsor A Village",
      problem:
        "Piecemeal development approaches often fail. Communities lack integrated access to nutritious food, good health, and quality education.",
      solution:
        "We implement the 'All It Takes Is 3' strategy, integrating health, social, and economic well-being led by the communities themselves.",
      impact:
        "You will join a community of supporters dedicated to lifting an entire village out of poverty, receiving regular progress updates.",
      cost: "Consider a gift of at least $20/month. Full village sustainability projects can range up to $100,000.",
      imageFile: "/images/sponsor-a-village-new.jpg",
      imageAlt: "Sponsor A Village",
      donateLink:
        "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
      align: "right",
    },
    {
      title: "Sponsor A Water Well",
      problem:
        "Almost half of Sub-Saharan Africa lacks clean drinking water. Many rely on contaminated sources, leading to disease and forcing women and children to walk miles daily.",
      solution:
        "We drill new wells and rehabilitate old ones, ensuring ongoing maintenance training and community ownership.",
      impact:
        "You represent a lifeline. Clean water drastically reduces disease and liberates time for education and economic activity.",
      cost: "Drilling a well averages $5,000. Monthly sponsorship of $20 helps maintain these lifelines.",
      imageFile: "/images/sponsor-a-water-well-new.png",
      imageAlt: "Sponsor A Water Well",
      donateLink:
        "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
      align: "left",
    },
  ],
};

export const churchMinistryPageSeed: ChurchMinistryPageSeed = {
  heroHeading: "Church Ministry",
  heroSubheading:
    "“Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” — Matthew 25:40",
  heroImageFile: "/projects/clean_water_makeni_trinity_banner.png",
  heroImageAlt: "Church Ministry",
  bodyHtml: `
    <h3>What Is the Church Ministry Program?</h3>
    <p>EnviroOne invites your church and congregation to join our crusade of improving the foundational pillars of human development—food, health, and knowledge—for the less privileged.</p>
    <p>We believe that empowering the poor and disadvantaged is a noble course commanded by God. By partnering with us, you help answer the call to feed the hungry, give drink to the thirsty, and care for those in need.</p>
    <h3>How Can You Get Involved?</h3>
    <h4>Prayer Partnership</h4>
    <p>Pray for EnviroOne, our donors, volunteers, and workforce to be blessed with God’s love, compassion, and wisdom as we serve.</p>
    <h4>Host a Speaker</h4>
    <p>Invite EnviroOne to speak at your church service or event. We would love to share the work the Lord has blessed us to do.</p>
    <h4>Corporate Partnership</h4>
    <p>Engage your community to help families live with hope. We encourage you to add your organization's name to our list of partners.</p>
    <h3>Connect With Us</h3>
    <p>We would love to be part of your Ministry. Please contact us at <strong>ministry@enviroone.org</strong> to start a conversation about how we can work together.</p>
  `,
};

export const siteSettingsSeed: SiteSettingsSeed = {
  orgName: "EnviroOne",
  primaryEmail: "mail@enviroone.org",
  sierraLeoneOffice: {
    address: "77 Bai Bureh Road\nFreetown, SIERRA LEONE",
    phone: "+232 99 443377",
  },
  usaOffice: {
    address: "3 Creek Lane\nMullica Hill, NJ USA 08062",
    phone: "+1 609 217 4941",
  },
  socials: {
    instagramUrl:
      "https://www.instagram.com/envirooneorg?igsh=MTI1c2U0dGQyMzluZg==",
    twitterXUrl: "https://x.com/envirooneorg?s=21&t=2kckGnNDFnZWO9217CKhXw",
    facebookUrl:
      "https://www.facebook.com/share/1D9wCgyKg5/?mibextid=wwXIfr",
    tumblrUrl: "https://www.tumblr.com/envirooneorg-blog",
    mailtoEmail: "mail@enviroone.org",
  },
  footerResources: [
    {
      title: "EnviroOne Impact",
      description: "One-page impact summary of our work in Sierra Leone.",
      fileSrc: "/EnviroOne-Impact.pdf",
      openInNewTab: true,
    },
    {
      title: "Crop Guide",
      description: "EnviroOne Crop Guide v01.",
      fileSrc: "/documents/EnviroOneCropGuideVer01.rar",
      openInNewTab: false,
    },
    {
      title: "Hydrofracing Natural Gas",
      description: "Paper on hydrofracing for natural gas.",
      fileSrc: "/documents/Fracking-for-natural-gas-paper.pdf",
      openInNewTab: true,
    },
    {
      title: "Sludge to Biodiesel",
      description: "Paper on biodiesel from sludge.",
      fileSrc: "/documents/Biodiesel-from-sludge.pdf",
      openInNewTab: true,
    },
  ],
};

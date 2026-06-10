import type { SchemaTypeDefinition } from "sanity";

import { teamMember } from "./teamMember";
import { blogPost } from "./blogPost";
import { homeHero } from "./homeHero";
import { focusAreasIntro } from "./focusAreasIntro";
import { impactDownload } from "./impactDownload";
import { focusArea } from "./focusArea";
import { impactStat } from "./impactStat";
import { projectsIndex } from "./projectsIndex";
import { projectPage } from "./projectPage";
import { aboutPage } from "./aboutPage";
import { donatePage } from "./donatePage";
import { getInvolvedPage } from "./getInvolvedPage";
import { volunteerPage } from "./volunteerPage";
import { sponsorshipPage } from "./sponsorshipPage";
import { churchMinistryPage } from "./churchMinistryPage";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    teamMember,
    blogPost,
    homeHero,
    focusAreasIntro,
    impactDownload,
    focusArea,
    impactStat,
    projectsIndex,
    projectPage,
    aboutPage,
    donatePage,
    getInvolvedPage,
    volunteerPage,
    sponsorshipPage,
    churchMinistryPage,
    siteSettings,
  ],
};

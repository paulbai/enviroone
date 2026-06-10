import { client } from "./client";
import {
  aboutPageQuery,
  donatePageQuery,
  getInvolvedPageQuery,
  volunteerPageQuery,
  sponsorshipPageQuery,
  churchMinistryPageQuery,
  siteSettingsQuery,
} from "../queries";
import type {
  AboutPageQueryResult,
  DonatePageQueryResult,
  GetInvolvedPageQueryResult,
  VolunteerPageQueryResult,
  SponsorshipPageQueryResult,
  ChurchMinistryPageQueryResult,
  SiteSettingsQueryResult,
} from "../sanity.types";

const opts = (tag: string) => ({
  next: { tags: [tag], revalidate: 3600 },
});

export const getAboutPage = (): Promise<AboutPageQueryResult> =>
  client.fetch(aboutPageQuery, {}, opts("aboutPage"));

export const getDonatePage = (): Promise<DonatePageQueryResult> =>
  client.fetch(donatePageQuery, {}, opts("donatePage"));

export const getGetInvolvedPage = (): Promise<GetInvolvedPageQueryResult> =>
  client.fetch(getInvolvedPageQuery, {}, opts("getInvolvedPage"));

export const getVolunteerPage = (): Promise<VolunteerPageQueryResult> =>
  client.fetch(volunteerPageQuery, {}, opts("volunteerPage"));

export const getSponsorshipPage = (): Promise<SponsorshipPageQueryResult> =>
  client.fetch(sponsorshipPageQuery, {}, opts("sponsorshipPage"));

export const getChurchMinistryPage = (): Promise<ChurchMinistryPageQueryResult> =>
  client.fetch(churchMinistryPageQuery, {}, opts("churchMinistryPage"));

export const getSiteSettings = (): Promise<SiteSettingsQueryResult> =>
  client.fetch(siteSettingsQuery, {}, opts("siteSettings"));

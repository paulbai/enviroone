import { client } from "./client";
import {
  homeHeroQuery,
  focusAreasIntroQuery,
  impactDownloadQuery,
  focusAreasQuery,
  impactStatsQuery,
} from "../queries";
import type {
  HomeHeroQueryResult,
  FocusAreasIntroQueryResult,
  ImpactDownloadQueryResult,
  FocusAreasQueryResult,
  ImpactStatsQueryResult,
} from "../sanity.types";

const opts = (tag: string) => ({
  next: { tags: [tag], revalidate: 3600 },
});

export const getHomeHero = (): Promise<HomeHeroQueryResult> =>
  client.fetch(homeHeroQuery, {}, opts("homeHero"));

export const getFocusAreasIntro = (): Promise<FocusAreasIntroQueryResult> =>
  client.fetch(focusAreasIntroQuery, {}, opts("focusAreasIntro"));

export const getImpactDownload = (): Promise<ImpactDownloadQueryResult> =>
  client.fetch(impactDownloadQuery, {}, opts("impactDownload"));

export const getFocusAreas = (): Promise<FocusAreasQueryResult> =>
  client.fetch(focusAreasQuery, {}, opts("focusArea"));

export const getImpactStats = (): Promise<ImpactStatsQueryResult> =>
  client.fetch(impactStatsQuery, {}, opts("impactStat"));

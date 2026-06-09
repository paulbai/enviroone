import { client } from "./client";
import {
  projectsIndexQuery,
  projectCardsQuery,
  projectPagesSlugsQuery,
  projectPageBySlugQuery,
} from "../queries";
import type {
  ProjectsIndexQueryResult,
  ProjectCardsQueryResult,
  ProjectPagesSlugsQueryResult,
  ProjectPageBySlugQueryResult,
} from "../sanity.types";

const opts = (tag: string) => ({
  next: { tags: [tag], revalidate: 3600 },
});

export const getProjectsIndex = (): Promise<ProjectsIndexQueryResult> =>
  client.fetch(projectsIndexQuery, {}, opts("projectsIndex"));

export const getProjectCards = (): Promise<ProjectCardsQueryResult> =>
  client.fetch(projectCardsQuery, {}, opts("projectPage"));

export const getProjectPageSlugs = async (): Promise<string[]> => {
  const result = (await client.fetch(
    projectPagesSlugsQuery,
    {},
    opts("projectPage"),
  )) as ProjectPagesSlugsQueryResult;
  return result.map((r) => r.slug);
};

export const getProjectPageBySlug = (
  slug: string,
): Promise<ProjectPageBySlugQueryResult> =>
  client.fetch(projectPageBySlugQuery, { slug }, opts("projectPage"));

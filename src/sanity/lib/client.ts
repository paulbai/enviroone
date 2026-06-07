import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // fetch fresh content at build time
  perspective: "published", // public site only ever sees published docs
  // Server-only token. process.env.* without NEXT_PUBLIC_ is undefined in
  // client bundles, so the token never leaks to the browser. Required because
  // the dataset is not publicly readable on the current Sanity plan.
  token: process.env.SANITY_API_READ_TOKEN,
});

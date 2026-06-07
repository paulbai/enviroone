import { client } from "./client";
import { teamMembersQuery } from "../queries";
import type { TeamMembersQueryResult } from "../sanity.types";

export async function getTeamMembers(): Promise<TeamMembersQueryResult> {
  return client.fetch(
    teamMembersQuery,
    {},
    { next: { tags: ["teamMember"], revalidate: 3600 } },
  );
}

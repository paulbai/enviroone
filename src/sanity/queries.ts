import { defineQuery } from "next-sanity";

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember" && isActive == true] | order(orderRank) {
    _id,
    name,
    role,
    bio,
    photo
  }
`);

import type { SchemaTypeDefinition } from "sanity";

import { teamMember } from "./teamMember";
import { blogPost } from "./blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, blogPost],
};

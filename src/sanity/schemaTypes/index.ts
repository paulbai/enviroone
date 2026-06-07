import type { SchemaTypeDefinition } from "sanity";

import { teamMember } from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember],
};

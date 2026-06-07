import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { UsersIcon } from "@sanity/icons";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "teamMember",
        title: "Team Members",
        icon: UsersIcon,
        S,
        context,
      }),
    ]);

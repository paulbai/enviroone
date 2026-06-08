import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { UsersIcon, DocumentTextIcon } from "@sanity/icons";

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
      S.listItem()
        .title("Blog Posts")
        .icon(DocumentTextIcon)
        .child(
          S.documentList()
            .title("Blog Posts")
            .filter('_type == "blogPost"')
            .defaultOrdering([
              { field: "publishedAt", direction: "desc" },
            ]),
        ),
    ]);

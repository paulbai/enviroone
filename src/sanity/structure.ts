import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  UsersIcon,
  DocumentTextIcon,
  HomeIcon,
  BookIcon,
  DownloadIcon,
  EarthGlobeIcon,
  BarChartIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Home Page")
            .items([
              S.listItem()
                .title("Hero")
                .icon(HomeIcon)
                .child(
                  S.editor()
                    .id("homeHero")
                    .schemaType("homeHero")
                    .documentId("homeHero"),
                ),
              S.listItem()
                .title("Focus Areas Intro")
                .icon(BookIcon)
                .child(
                  S.editor()
                    .id("focusAreasIntro")
                    .schemaType("focusAreasIntro")
                    .documentId("focusAreasIntro"),
                ),
              S.listItem()
                .title("Impact Download")
                .icon(DownloadIcon)
                .child(
                  S.editor()
                    .id("impactDownload")
                    .schemaType("impactDownload")
                    .documentId("impactDownload"),
                ),
            ]),
        ),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "focusArea",
        title: "Focus Areas",
        icon: EarthGlobeIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "impactStat",
        title: "Impact Stats",
        icon: BarChartIcon,
        S,
        context,
      }),
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

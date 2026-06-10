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
  ProjectsIcon,
  RocketIcon,
  CogIcon,
  InfoOutlineIcon,
  HeartIcon,
  TagIcon,
  CommentIcon,
  UserIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Site")
            .items([
              S.listItem()
                .title("Site Settings")
                .icon(CogIcon)
                .child(
                  S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
            ]),
        ),
      S.divider(),
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
      S.listItem()
        .title("Pages")
        .icon(BookIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("About")
                .icon(InfoOutlineIcon)
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("aboutPage")
                    .documentId("aboutPage"),
                ),
              S.listItem()
                .title("Donate")
                .icon(HeartIcon)
                .child(
                  S.editor()
                    .id("donatePage")
                    .schemaType("donatePage")
                    .documentId("donatePage"),
                ),
              S.listItem()
                .title("Get Involved")
                .icon(UsersIcon)
                .child(
                  S.editor()
                    .id("getInvolvedPage")
                    .schemaType("getInvolvedPage")
                    .documentId("getInvolvedPage"),
                ),
              S.listItem()
                .title("Volunteer")
                .icon(UserIcon)
                .child(
                  S.editor()
                    .id("volunteerPage")
                    .schemaType("volunteerPage")
                    .documentId("volunteerPage"),
                ),
              S.listItem()
                .title("Sponsorship")
                .icon(TagIcon)
                .child(
                  S.editor()
                    .id("sponsorshipPage")
                    .schemaType("sponsorshipPage")
                    .documentId("sponsorshipPage"),
                ),
              S.listItem()
                .title("Church Ministry")
                .icon(CommentIcon)
                .child(
                  S.editor()
                    .id("churchMinistryPage")
                    .schemaType("churchMinistryPage")
                    .documentId("churchMinistryPage"),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Projects")
        .icon(ProjectsIcon)
        .child(
          S.list()
            .title("Projects")
            .items([
              S.listItem()
                .title("Projects Index")
                .icon(ProjectsIcon)
                .child(
                  S.editor()
                    .id("projectsIndex")
                    .schemaType("projectsIndex")
                    .documentId("projectsIndex"),
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
        type: "projectPage",
        title: "Project Pages",
        icon: RocketIcon,
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

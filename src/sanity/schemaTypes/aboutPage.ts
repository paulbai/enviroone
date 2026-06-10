import { defineType, defineField } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

const ICON_OPTIONS = [
  { title: "Sprout", value: "sprout" },
  { title: "Droplet", value: "droplet" },
  { title: "Book Open", value: "book-open" },
  { title: "Users", value: "users" },
  { title: "Leaf", value: "leaf" },
  { title: "Map Pin", value: "map-pin" },
  { title: "Sun", value: "sun" },
  { title: "Heart", value: "heart" },
  { title: "Activity", value: "activity" },
  { title: "Trending Up", value: "trending-up" },
  { title: "Check Circle", value: "check-circle" },
];

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionHeading",
      title: "Mission heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionBody",
      title: "Mission body",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "philosophyHeading",
      title: "Philosophy heading",
      type: "string",
    }),
    defineField({
      name: "philosophyItems",
      title: "Philosophy items",
      type: "array",
      of: [
        {
          type: "object",
          name: "philosophyItem",
          title: "Philosophy item",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICON_OPTIONS, layout: "dropdown" },
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "accomplishmentsHeading",
      title: "Accomplishments heading",
      type: "string",
    }),
    defineField({
      name: "accomplishmentsItems",
      title: "Accomplishments items",
      type: "array",
      of: [
        {
          type: "object",
          name: "accomplishmentItem",
          title: "Accomplishment item",
          fields: [
            defineField({
              name: "year",
              title: "Year",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { year: "year", title: "title" },
            prepare({ year, title }) {
              return {
                title: title ?? "Untitled",
                subtitle: year ?? "",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heroHeading", media: "heroImage" },
  },
});

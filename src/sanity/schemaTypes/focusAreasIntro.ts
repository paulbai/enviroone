import { defineType, defineField } from "sanity";
import { BookIcon } from "@sanity/icons";

export const focusAreasIntro = defineType({
  name: "focusAreasIntro",
  title: "Focus Areas Intro",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
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
  ],
  preview: {
    select: { title: "heading" },
  },
});

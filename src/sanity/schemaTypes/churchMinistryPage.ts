import { defineType, defineField } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const churchMinistryPage = defineType({
  name: "churchMinistryPage",
  title: "Church Ministry Page",
  type: "document",
  icon: CommentIcon,
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
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "heroHeading", media: "heroImage" },
  },
});

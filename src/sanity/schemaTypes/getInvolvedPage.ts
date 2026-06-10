import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const getInvolvedPage = defineType({
  name: "getInvolvedPage",
  title: "Get Involved Page",
  type: "document",
  icon: UsersIcon,
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
      name: "waysHeading",
      title: "Ways-to-give section heading",
      type: "string",
    }),
    defineField({
      name: "waysIntro",
      title: "Ways-to-give intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "waysToGive",
      title: "Ways to give",
      type: "array",
      of: [
        {
          type: "object",
          name: "wayToGive",
          title: "Way to give",
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
              name: "image",
              title: "Image",
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
              name: "href",
              title: "Link",
              type: "string",
              description: "Destination URL or path.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "align",
              title: "Align",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "align", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heroHeading", media: "heroImage" },
  },
});

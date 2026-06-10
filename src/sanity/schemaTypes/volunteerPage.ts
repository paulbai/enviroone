import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const volunteerPage = defineType({
  name: "volunteerPage",
  title: "Volunteer Page",
  type: "document",
  icon: UserIcon,
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
      name: "rolesHeading",
      title: "Roles heading",
      type: "string",
    }),
    defineField({
      name: "rolesIntro",
      title: "Roles intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "roles",
      title: "Volunteer roles",
      type: "array",
      of: [
        {
          type: "object",
          name: "volunteerRole",
          title: "Volunteer role",
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
              name: "tasks",
              title: "Key responsibilities & opportunities",
              type: "array",
              of: [{ type: "string" }],
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

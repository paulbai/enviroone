import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const sponsorshipPage = defineType({
  name: "sponsorshipPage",
  title: "Sponsorship Page",
  type: "document",
  icon: TagIcon,
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
      name: "tiersHeading",
      title: "Tiers heading",
      type: "string",
    }),
    defineField({
      name: "tiersIntro",
      title: "Tiers intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tiers",
      title: "Sponsorship tiers",
      type: "array",
      of: [
        {
          type: "object",
          name: "sponsorshipTier",
          title: "Sponsorship tier",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "problem",
              title: "The Problem",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "solution",
              title: "Our Solution",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "impact",
              title: "Your Impact",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "cost",
              title: "Sponsorship cost / amount",
              type: "string",
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
              name: "donateLink",
              title: "Donate link",
              type: "string",
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
            select: { title: "title", subtitle: "cost", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heroHeading", media: "heroImage" },
  },
});

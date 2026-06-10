import { defineType, defineField } from "sanity";
import { HeartIcon } from "@sanity/icons";

export const donatePage = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  icon: HeartIcon,
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
      name: "optionsHeading",
      title: "Options heading",
      type: "string",
    }),
    defineField({
      name: "optionsIntro",
      title: "Options intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "donationOptions",
      title: "Donation options",
      type: "array",
      of: [
        {
          type: "object",
          name: "donationOption",
          title: "Donation option",
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
              name: "amount",
              title: "Amount",
              type: "string",
              description: "Optional, e.g. '$50' or 'From $20/month'.",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
              description: "Destination URL, e.g. Zeffy donation form.",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "amount" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heroHeading", media: "heroImage" },
  },
});

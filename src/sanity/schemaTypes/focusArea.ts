import { defineType, defineField } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const focusArea = defineType({
  name: "focusArea",
  title: "Focus Area",
  type: "document",
  icon: EarthGlobeIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "focusArea" }),
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
          description: "Describe the image for screen readers.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        defineField({
          name: "kind",
          title: "Link kind",
          type: "string",
          options: {
            list: [
              { title: "Internal", value: "internal" },
              { title: "External", value: "external" },
            ],
            layout: "radio",
          },
          initialValue: "internal",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "href",
          title: "Href",
          type: "string",
          description:
            "Relative path for internal links (e.g. /projects/agriculture) or absolute URL for external.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "align",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});

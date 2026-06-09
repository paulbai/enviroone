import { defineType, defineField } from "sanity";
import { RocketIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const projectPage = defineType({
  name: "projectPage",
  title: "Project Page",
  type: "document",
  icon: RocketIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "projectPage" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Lucide icon name used in the card + page header.",
      options: {
        list: [
          { title: "Sprout (Agriculture)", value: "sprout" },
          { title: "Droplet (Clean Water)", value: "droplet" },
          { title: "Book Open (Education)", value: "book-open" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "accent",
      title: "Accent color",
      type: "string",
      description: "Tailwind accent color used for the card + page header.",
      options: {
        list: [
          { title: "Forest (green)", value: "forest" },
          { title: "Water (blue)", value: "water" },
          { title: "Golden (yellow)", value: "golden" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "Short description shown on the /projects overview card.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Card image",
      type: "image",
      description: "Image shown on the /projects overview card.",
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
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "carousel",
      title: "Carousel slides",
      type: "array",
      description:
        "Optional image carousel shown beneath the body. Leave empty to hide.",
      of: [
        {
          type: "object",
          name: "carouselSlide",
          title: "Carousel slide",
          fields: [
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
              name: "caption",
              title: "Caption",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "linkVideoId",
              title: "Linked YouTube video ID (optional)",
              type: "string",
              description:
                "Optional per-slide YouTube video that opens on click.",
            }),
          ],
          preview: {
            select: { title: "caption", media: "image" },
          },
        },
      ],
    }),
    defineField({
      name: "featuredVideoId",
      title: "Featured YouTube video ID",
      type: "string",
      description:
        "Optional YouTube video ID surfaced by the carousel's play button.",
    }),
    defineField({
      name: "featuredVideoLabel",
      title: "Featured video label",
      type: "string",
      description: "Label for the carousel's play button.",
    }),
  ],
  preview: {
    select: { title: "title", media: "cardImage" },
  },
});

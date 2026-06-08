import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homeHero = defineType({
  name: "homeHero",
  title: "Hero",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "accentText",
      title: "Accent text",
      type: "string",
      description:
        "Part of the headline that appears in highlight color. Must exactly match a substring of the headline.",
    }),
    defineField({
      name: "pillText",
      title: "Pill text",
      type: "string",
      description: "Small label under the headline, e.g. 'Food • Health • Knowledge'.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "damagedImage",
      title: "Damaged / initial image",
      type: "image",
      description: "The 'before' state image shown at the top of the scroll.",
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
      name: "restoredImage",
      title: "Restored / final image",
      type: "image",
      description: "The 'after' / restored landscape revealed as you scroll.",
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
      name: "heroChildrenImage",
      title: "Hero children portrait (optional)",
      type: "image",
      description:
        "Optional portrait used pre-scroll. Falls back to the damaged image if omitted.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers.",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "headline", media: "damagedImage" },
  },
});

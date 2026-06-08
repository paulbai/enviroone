import { defineType, defineField } from "sanity";
import { BarChartIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const impactStat = defineType({
  name: "impactStat",
  title: "Impact Stat",
  type: "document",
  icon: BarChartIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "impactStat" }),
    defineField({
      name: "value",
      title: "Value",
      type: "number",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: "Symbol after the number, like '+' or '%'. Leave blank for none.",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Droplet", value: "droplet" },
          { title: "Users", value: "users" },
          { title: "Leaf", value: "leaf" },
          { title: "Book Open", value: "book-open" },
          { title: "Sprout", value: "sprout" },
          { title: "Map Pin", value: "map-pin" },
          { title: "Sun", value: "sun" },
          { title: "Heart", value: "heart" },
          { title: "Activity", value: "activity" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gridSpan",
      title: "Grid span",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
        layout: "radio",
      },
      initialValue: "medium",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "accent",
      title: "Accent gradient",
      type: "string",
      options: {
        list: [
          { title: "Water", value: "water" },
          { title: "Forest", value: "forest" },
          { title: "Golden", value: "golden" },
          { title: "Terracotta", value: "terracotta" },
          { title: "Warm Gray", value: "warmGray" },
          { title: "Forest → Water", value: "forest-water" },
          { title: "Forest → Golden", value: "forest-golden" },
          { title: "Terracotta → Golden", value: "terracotta-golden" },
          { title: "Water → Forest", value: "water-forest" },
        ],
        layout: "dropdown",
      },
      initialValue: "forest",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { value: "value", suffix: "suffix", label: "label" },
    prepare({ value, suffix, label }) {
      return {
        title: `${value ?? "?"}${suffix ?? ""} — ${label ?? "Untitled"}`,
      };
    },
  },
});

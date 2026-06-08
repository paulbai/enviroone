import { defineType, defineField } from "sanity";
import { DownloadIcon } from "@sanity/icons";

export const impactDownload = defineType({
  name: "impactDownload",
  title: "Impact Download",
  type: "document",
  icon: DownloadIcon,
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
      name: "buttonLabel",
      title: "Button label",
      type: "string",
      initialValue: "Download",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF file",
      type: "file",
      options: { accept: "application/pdf" },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});

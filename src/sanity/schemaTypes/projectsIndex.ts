import { defineType, defineField } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const projectsIndex = defineType({
  name: "projectsIndex",
  title: "Projects Index",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading shown on the /projects overview page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Intro paragraph shown beneath the heading on /projects.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title ?? "Projects Index" };
    },
  },
});

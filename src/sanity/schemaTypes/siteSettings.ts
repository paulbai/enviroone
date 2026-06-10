import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "orgName",
      title: "Organization name",
      type: "string",
      initialValue: "EnviroOne",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryEmail",
      title: "Primary email",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sierraLeoneOffice",
      title: "Sierra Leone office",
      type: "object",
      fields: [
        defineField({
          name: "address",
          title: "Address",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "usaOffice",
      title: "USA office",
      type: "object",
      fields: [
        defineField({
          name: "address",
          title: "Address",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        defineField({
          name: "instagramUrl",
          title: "Instagram URL",
          type: "url",
        }),
        defineField({
          name: "twitterXUrl",
          title: "X (Twitter) URL",
          type: "url",
        }),
        defineField({
          name: "facebookUrl",
          title: "Facebook URL",
          type: "url",
        }),
        defineField({
          name: "tumblrUrl",
          title: "Tumblr URL",
          type: "url",
        }),
        defineField({
          name: "mailtoEmail",
          title: "Mailto email",
          type: "string",
          description: "Used for the email icon's mailto: link.",
        }),
      ],
    }),
    defineField({
      name: "footerResources",
      title: "Footer resources",
      type: "array",
      description: "Downloadable documents shown in the footer.",
      of: [
        {
          type: "object",
          name: "footerResource",
          title: "Footer resource",
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
              rows: 2,
            }),
            defineField({
              name: "file",
              title: "File",
              type: "file",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "openInNewTab",
              title: "Open in new tab",
              type: "boolean",
              initialValue: true,
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "orgName" },
    prepare({ title }) {
      return { title: title ?? "Site Settings" };
    },
  },
});

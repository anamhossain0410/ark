// ./schemas/siteSettings.ts
import { defineType, defineField } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Enforce singleton pattern
  __experimental_actions: [
    // Disable create and delete actions to enforce singleton
    'create', // Enable create for initial setup
    'update',
    'publish',
    // 'delete',
  ],
  // Make it a singleton
  singleton: true,
  groups: [
    { name: "general", title: "General" },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "pages", title: "Pages" },
    { name: "blog", title: "Blog" },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "header",
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [{ type: "string" }], // you can create a navLink object
      group: "header",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "string",
      group: "footer",
    }),
    defineField({
      name: "defaultPage",
      title: "Default Page Slug",
      type: "string",
    //   type: "reference",
    //   to: [{ type: "page" }],
    //   to: [{ type: "page" }],
      group: "pages",
    }),
    defineField({
      name: "blogSettings",
      title: "Blog Settings",
      type: "object",
      fields: [
        { name: "postsPerPage", type: "number", title: "Posts per page" },
        { name: "showAuthor", type: "boolean", title: "Show Author?" },
      ],
      group: "blog",
    }),
  ],
});
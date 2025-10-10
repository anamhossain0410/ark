// ./schemas/siteSettings.ts
import { defineType, defineField } from "sanity";
import { CogIcon } from '@sanity/icons';

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "general", title: "General" },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "pages", title: "Pages" },
    { name: "blog", title: "Blog" },
    { name: "scripts", title: "Scripts" },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
      description: "The main title of your website",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      group: "general",
      description: "A brief description of your site (for SEO)",
      rows: 3,
    }),
    // Group: Header - Logo
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "header",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    // Group: Header - FavIcon
    defineField({
      name: "favicon",
      title: "FavIcon",
      type: "image",
      group: "header",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        {
          type: "object",
          name: "navLink",
          title: "Navigation Link",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              description: "Internal path (e.g., /about) or external URL (e.g., https://example.com)",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "external",
              title: "External Link",
              type: "boolean",
              description: "Check if this is an external link",
              initialValue: false,
            },
            {
              name: "openInNewTab",
              title: "Open in New Tab",
              type: "boolean",
              description: "Open link in a new tab/window",
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
              external: "external",
            },
            prepare({ title, subtitle, external }) {
              return {
                title: title,
                subtitle: `${subtitle}${external ? " (external)" : ""}`,
              };
            },
          },
        },
      ],
      group: "header",
      validation: (Rule) => Rule.max(10).warning("Too many navigation items might clutter the header"),
    }),
    defineField({
      name: "footerTitle",
      title: "Footer Title",
      type: "string",
      group: "footer",
      placeholder: "Footer Title",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "GitHub", value: "github" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              platform: "platform",
              url: "url",
            },
            prepare({ platform, url }) {
              return {
                title: platform,
                subtitle: url,
              };
            },
          },
        },
      ],
      group: "footer",
    }),
    // copyright field
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "text",
      group: "footer",
      rows: 3,
      placeholder: "© 2025 Your Company. All rights reserved.",
    }),
    defineField({
      name: "defaultPage",
      title: "Default Page Slug",
      type: "string",
      description: "The default page slug (e.g., 'home')",
      group: "pages",
      validation: (Rule) => Rule.custom((slug) => {
        if (slug && slug.startsWith('/')) {
          return 'Slug should not start with a slash';
        }
        return true;
      }),
    }),
    defineField({
      name: "blogSettings",
      title: "Blog Settings",
      type: "object",
      fields: [
        { 
          name: "postsPerPage", 
          type: "number", 
          title: "Posts per page",
          validation: (Rule) => Rule.required().min(1).max(50),
          initialValue: 10,
        },
        { 
          name: "showAuthor", 
          type: "boolean", 
          title: "Show Author?",
          description: "Display author information on blog posts",
          initialValue: true,
        },
        { 
          name: "showDate", 
          type: "boolean", 
          title: "Show Published Date?",
          description: "Display published date on blog posts",
          initialValue: true,
        },
        { 
          name: "enableComments", 
          type: "boolean", 
          title: "Enable Comments?",
          description: "Allow comments on blog posts",
          initialValue: false,
        },
      ],
      group: "blog",
    }),
    // Group: Scripts
    // field: Google Analytics
    defineField({
      name: "googleAnalytics",
      title: "Google Analytics",
      type: "text",
      group: "scripts",
      rows: 3,
    }),
    // field: Header Scripts
    defineField({
      name: "headerScripts",
      title: "Header Scripts",
      type: "text",
      group: "scripts",
      rows: 3,
    }),
    // field: Additional CSS
    defineField({
      name: "additionalCSS",
      title: "Additional CSS",
      type: "text",
      group: "scripts",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare({ title }) {
      return {
        title: title || "Site Settings",
        subtitle: "Configure your site settings",
      };
    },
  },
});
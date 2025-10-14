import { defineField, defineType } from "sanity";

export const multilingualTextType = defineType({
  name: "multilingualText",
  title: "Multilingual Text",
  type: "object",
  fields: [
    defineField({
      name: "en",
      title: "English",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fr",
      title: "French",
      type: "string",
    }),
    defineField({
      name: "ru",
      title: "Russian",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "en",
      subtitle: "fr",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No English text",
        subtitle: subtitle ? `FR: ${subtitle}` : "No French text",
      };
    },
  },
});

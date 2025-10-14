import { defineField, defineType } from "sanity";

export const multilingualBlockContentType = defineType({
  name: "multilingualBlockContent",
  title: "Multilingual Block Content",
  type: "object",
  fields: [
    defineField({
      name: "en",
      title: "English",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fr",
      title: "French",
      type: "blockContent",
    }),
    defineField({
      name: "ru",
      title: "Russian",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "en",
    },
    prepare({ title }) {
      return {
        title: title ? "Multilingual Content" : "No content",
        subtitle: "English, French, Russian",
      };
    },
  },
});

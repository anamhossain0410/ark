import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "multilingualText",
      description: "Title in English, French, and Arabic",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "multilingualBlockContent",
      description: "Text content in English, French, and Arabic",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
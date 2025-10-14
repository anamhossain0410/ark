import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "multilingualText",
      description: "Title in English, French, and Russian",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "multilingualBlockContent",
      description: "Body in English, French, and Russian",
    }),
  ],
});
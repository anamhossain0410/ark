import { defineField, defineType } from "sanity";

export const faqsType = defineType({
  name: "faqs",
  title: "FAQs",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "multilingualText",
      description: "Title in English, French, and Arabic",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
  ],
});
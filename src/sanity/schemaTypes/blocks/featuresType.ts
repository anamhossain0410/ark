import { defineField, defineType } from "sanity";

export const featuresType = defineType({
  name: "features",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "multilingualText",
      description: "Features Title in English, French, and Russian",
    }),
    defineField({
      name: "features",
      type: "array",
      of: [
        defineField({
          name: "feature",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "multilingualText",
              description: "Feature Title in English, French, and Russian",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "multilingualBlockContent",
              description: "Feature Text in English, French, and Russian",
            }),
          ],
        }),
      ],
    }),
  ],
});
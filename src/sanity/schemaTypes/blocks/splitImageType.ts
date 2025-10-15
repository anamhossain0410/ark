import { defineField, defineType } from "sanity";

export const splitImageType = defineType({
  name: "splitImage",
  type: "object",
  fields: [
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Split Image Title in English, French, and Russian",
      type: "multilingualText",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Text and Image",
        media
      };
    },
  },
});
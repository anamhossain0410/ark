import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import { stegaClean } from "next-sanity";
import { getLocalizedText } from "@/app/lib/languageUtils";
// import { useLanguage } from "@/app/contexts/LanguageContext";

type SplitImageProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "splitImage" }
>;

export function SplitImage({ title, image, orientation, language = 'en' }: SplitImageProps & { language?: 'en' | 'fr' | 'ru' }) {
  // const { language } = useLanguage();
  
  // Get the title based on current language, fallback to English
  const displayTitle = getLocalizedText(title, language);
  
  return (
    <section
      className="container mx-auto flex gap-8 py-16 data-[orientation='imageRight']:flex-row-reverse"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {image ? (
        <Image
          className="rounded-xl w-2/3 h-auto"
          src={urlFor(image).width(800).height(600).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
      <div className="w-1/3 flex items-center">
        {displayTitle ? (
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-pink-500 text-pretty max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {displayTitle}
          </h2>
        ) : null}
      </div>
    </section>
  );
}
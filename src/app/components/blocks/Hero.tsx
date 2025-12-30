import { PortableText } from "next-sanity";
import Image from "next/image";
// import { Title } from "@/app/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult, BlockContent } from "@/sanity/types";
import { getLocalizedText, getLocalizedBlockContent } from "@/app/lib/languageUtils";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export function Hero({ title, text, image, language = 'en' }: HeroProps & { language?: 'en' | 'fr' | 'ru' }) {
  // Extract localized content using utility functions
  const displayTitle = getLocalizedText(title, language);
  const displayText = getLocalizedBlockContent(text, language);

  return (
    <section className="isolate w-full aspect-[2/1] py-16 relative overflow-hidden">
      <div className="relative flex flex-col justify-center items-center gap-8 h-full z-20">
        {displayTitle ? (
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white text-pretty max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {displayTitle}
          </h1>
        ) : null}
        <div className="prose-lg lg:prose-xl prose-invert flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayText ? <PortableText value={displayText as BlockContent} /> : null}
        </div>
      </div>
      <div className="absolute inset-0 bg-pink-500 opacity-50 z-10" />
      {image ? (
        <Image
          className="absolute inset-0 object-cover blur-sm"
          src={urlFor(image).width(1600).height(800).url()}
          width={1600}
          height={800}
          alt=""
        />
      ) : null}
    </section>
  );
}
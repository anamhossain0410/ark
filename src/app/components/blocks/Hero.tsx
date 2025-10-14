import { PortableText } from "next-sanity";
import Image from "next/image";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export function Hero({ title, text, image, language = 'en' }: HeroProps & { language?: 'en' | 'fr' | 'ru' }) {
  // Extract the English text as default, fallback to other languages if English is not available
  const displayTitle = title?.[language] || title?.en || title?.fr || title?.ru || '';
  const displayText = text?.[language] || text?.en || text?.fr || text?.ru || null;

  return (
    <section className="isolate w-full aspect-[2/1] py-16 relative overflow-hidden">
      <div className="relative flex flex-col justify-center items-center gap-8 h-full z-20">
        {displayTitle ? (
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white text-pretty max-w-3xl">
            {displayTitle}
          </h1>
        ) : null}
        <div className="prose-lg lg:prose-xl prose-invert flex items-center">
          {displayText ? <PortableText value={displayText} /> : null}
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
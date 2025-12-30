import { PAGE_QUERYResult, BlockContent } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { getLocalizedText, getLocalizedBlockContent } from "@/app/lib/languageUtils";

type FeaturesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "features" }
>;

export function Features({ features, title, language = 'en' }: FeaturesProps & { language?: 'en' | 'fr' | 'ru' }) {
  // Extract the language-specific content
  const displayTitle = getLocalizedText(title, language);
  
  return (
    <section className="container mx-auto flex flex-col gap-8 py-16">
      {displayTitle ? (
        <h2 className="text-xl mx-auto md:text-2xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl">
          {displayTitle}
        </h2>
      ) : null}

      {Array.isArray(features) ? (
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature) => {
            const displayFeatureTitle = getLocalizedText(feature.title, language);
            const displayFeatureText = getLocalizedBlockContent(feature.text, language);
            
            return (
              <div key={feature._key} className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-slate-800">
                  {displayFeatureTitle}
                </h3>
                {displayFeatureText ? (
                  <div className="prose prose-lg text-slate-600">
                    <PortableText value={displayFeatureText as BlockContent} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
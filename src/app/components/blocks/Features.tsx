import { PAGE_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";

type FeaturesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "features" }
>;

export function Features({ features, title, language = 'en' }: FeaturesProps & { language?: 'en' | 'fr' | 'ru' }) {
  // Extract the language-specific content
  const displayTitle = title ?.[language] || title ?.en || title ?.fr || title ?.ru || '';
  
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
            const displayFeatureTitle = feature.title ?.[language] || feature.title ?.en || feature.title ?.fr || feature.title ?.ru || '';
            const displayFeatureText = feature.text ?.[language] || feature.text ?.en || feature.text ?.fr || feature.text ?.ru || null;
            
            return (
              <div key={feature._key} className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-slate-800">
                  {displayFeatureTitle}
                </h3>
                {displayFeatureText ? (
                  <div className="prose prose-lg text-slate-600">
                    <PortableText value={displayFeatureText} />
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
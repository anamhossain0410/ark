import { PAGE_QUERYResult, BlockContent } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { getLocalizedText, getLocalizedBlockContent } from "@/app/lib/languageUtils";

type FAQsProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "faqs" }
>;

export function FAQs({ _key, title, faqs, language = 'en' }: FAQsProps & { language?: 'en' | 'fr' | 'ru' }) {
    // console.log('faqs', faqs);
    const displayTitle = getLocalizedText(title, language);
    const displayFaqs = faqs?.map((faq) => ({
      ...faq,
      title: getLocalizedText(faq.title, language),
      body: getLocalizedBlockContent(faq.body, language),
    }));
    // console.log('displayFaqs', displayFaqs);
  return (
    <section className="container mx-auto flex flex-col gap-8 py-16">
      {displayTitle ? (
        <h2 className="text-xl mx-auto md:text-2xl lg:text-5xl font-semibold text-slate-800 text-pretty max-w-3xl">
          {displayTitle}
        </h2>
      ) : null}
      {Array.isArray(displayFaqs) ? (
        <div className="max-w-2xl mx-auto border-b border-pink-200">
          {displayFaqs.map((faq) => (
            <details
              key={faq._id}
              className="group [&[open]]:bg-pink-50 transition-colors duration-100 px-4 border-t border-pink-200"
              name={_key}
            >
              <summary className="text-xl font-semibold text-slate-800 list-none cursor-pointer py-4 flex items-center justify-between">
                {faq.title}
                <span className="transform origin-center rotate-90 group-open:-rotate-90 transition-transform duration-200">
                  &larr;
                </span>
              </summary>
              <div className="pb-4">
                {faq.body ? <PortableText value={faq.body as BlockContent} /> : null}
              </div>
            </details>
          ))}
        </div>
      ) : null}
    </section>
  );
}
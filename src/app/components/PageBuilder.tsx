import { Hero } from "@/app/components/blocks/Hero";
import { Features } from "@/app/components/blocks/Features";
import { SplitImage } from "@/app/components/blocks/SplitImage";
import { FAQs } from "@/app/components/blocks/FAQs";
import { PAGE_QUERYResult } from "@/sanity/types";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

// Define a type for blocks that have _key property
type BlockWithKey = {
  _key: string;
  _type: string;
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        // console.log('block', block);
        
        // Type assertion to ensure block has _key
        const blockWithKey = block as BlockWithKey;
        
        switch (block._type) {
          case "hero":
            return <Hero key={blockWithKey._key} {...block} />;
          case "features":
            return <Features key={blockWithKey._key} {...block} />;
          case "splitImage":
            return <SplitImage key={blockWithKey._key} {...block} />;
          case "faqs":
            return <FAQs key={blockWithKey._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div key={blockWithKey._key}>Block not found: {blockWithKey._type}</div>;
        }
      })}
    </main>
  );
}
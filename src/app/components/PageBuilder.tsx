import { PAGE_QUERYResult } from "@/sanity/types";
import { PageBuilderClient } from "./PageBuilderClient";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  return <PageBuilderClient content={content} />;
}
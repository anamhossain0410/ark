"use client";

import Link from "next/link";
import { createDataAttribute } from "next-sanity";
// import { POST_QUERYResult } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { useOptimistic } from "next-sanity/hooks";

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

// Define a proper type for related posts
type RelatedPost = {
  _key: string;
  _id: string;
  title: string;
  slug: { current: string };
};

export function RelatedPosts({
  relatedPosts,
  documentId,
  documentType,
}: {
  relatedPosts: RelatedPost[] | null | undefined;
  documentId: string;
  documentType: string;
}) {
  const posts = useOptimistic<RelatedPost[] | null | undefined, unknown>(
    relatedPosts, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state, action: any) => {
      if (action.id === documentId && action?.document?.relatedPosts) {
        const relatedPosts = action.document.relatedPosts as unknown;
        if (Array.isArray(relatedPosts)) {
          // Optimistic document only has _ref values, not resolved references
          return relatedPosts.map(
            (post: unknown) => state?.find((p: RelatedPost) => p._key === (post as RelatedPost)._key) ?? post
          ) as RelatedPost[];
        }
      }
      return state;
    }
  );
  if (!posts) {
    return null;
  }
  return (
    <aside className="border-t">
      <h2>Related Posts</h2>
      <div className="not-prose text-balance">
        <ul
          className="flex flex-col sm:flex-row gap-0.5"
          data-sanity={createDataAttribute({
            ...createDataAttributeConfig,
            id: documentId,
            type: documentType,
            path: "relatedPosts",
          }).toString()}
        >
          {posts.map((post: RelatedPost) => (
            <li
              key={post._key}
              className="p-4 bg-blue-50 sm:w-1/3 flex-shrink-0"
              data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `relatedPosts[_key=="${post._key}"]`,
              }).toString()}
            >
              <Link href={`/posts/${post?.slug?.current}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
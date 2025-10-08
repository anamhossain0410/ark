import { POSTS_QUERY, SITE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import { PostCard } from "@/app/components/PostCard";

export default async function Page() {
    const posts = await sanityFetch({
        query: POSTS_QUERY, 
        // revalidate: 3600,
      })
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
                {posts.map((post) => (
                <PostCard key={post._id} {...post} />
                ))}
            </div>
        </div>
    )
}   
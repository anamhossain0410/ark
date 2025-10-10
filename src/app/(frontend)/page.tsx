import { POSTS_QUERY, SITE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { client } from "@/sanity/lib/client";
import { PostCard } from "@/app/components/PostCard";

export default async function Page() {
    const [posts, siteSettings] = await Promise.all([
        sanityFetch({
            query: POSTS_QUERY, 
            // revalidate: 3600,
        }),
        client.fetch(SITE_QUERY)
    ])
    
    // Get posts per page from site settings, default to 12 if not set
    const postsPerPage = siteSettings?.blogSettings?.postsPerPage ?? 12;
    
    // Limit posts based on site settings
    const limitedPosts = posts.slice(0, postsPerPage);
    
    // console.log('Posts per page setting:', postsPerPage);
    // console.log('Total posts available:', posts.length);
    // console.log('Posts being displayed:', limitedPosts.length);
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Debug info - remove in production */}
            <div className="py-4 text-sm text-gray-600">
                Showing {limitedPosts.length} of {posts.length} posts (Posts per page: {postsPerPage})
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
                {limitedPosts.map((post) => (
                <PostCard 
                    key={post._id} 
                    {...post} 
                    showAuthor={siteSettings?.blogSettings?.showAuthor ?? true}
                />
                ))}
            </div>
        </div>
    )
}   
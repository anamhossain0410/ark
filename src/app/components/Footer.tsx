import { SITE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function Footer() {
    const siteSettings = await client.fetch(SITE_QUERY);

    // Handle case when no site settings exist
    // console.log('siteSettings', siteSettings);
    
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-gray-300">
                        {siteSettings?.footerText || "© 2024 Your Site. All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
}
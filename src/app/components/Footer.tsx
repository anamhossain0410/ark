import { SITE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { SiteSettings } from "@/sanity/types";

export default async function Footer() {
    const siteSettings = await client.fetch(SITE_QUERY);

    // Handle case when no site settings exist
    // console.log('siteSettings', siteSettings);
    
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-gray-300">
                        {siteSettings?.footerTitle || "Footer Title"}
                    </p>
                    <div className="social-links">
                    {/* {siteSettings.navigation.map((item: NonNullable<SiteSettings['navigation']>[number] | string, index: number) => { */}
                    {siteSettings?.socialLinks?.map((socialLink: NonNullable<SiteSettings['socialLinks']>[number], index: number) => (
                        <a className="social-link mx-2" href={socialLink.url} key={`${index} - ${socialLink._key}`}>
                            {socialLink.platform}
                        </a>
                    ))}
                    </div>
                    <p className="footer-copyright">
                        {siteSettings?.copyright || "© 2025 Your Site. All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
}
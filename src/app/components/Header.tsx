import { SITE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { SiteSettings } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
    const siteSettings = await client.fetch(SITE_QUERY);
    console.log('siteSettings', siteSettings);
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/">
                        {/* Logo and Site Title */}
                        <div className="flex items-center space-x-3">
                            {siteSettings?.logo?.asset?.url && (
                                <Image
                                    src={siteSettings.logo.asset.url}
                                    alt={siteSettings.siteTitle || "Logo"}
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            )}
                            <h1 className="text-xl font-bold text-gray-900">
                                {siteSettings?.siteTitle || "Site Title"}
                            </h1>
                        </div>
                    </Link>

                    {/* Navigation */}
                    {siteSettings?.navigation && siteSettings.navigation.length > 0 && (
                        <nav className="hidden md:flex space-x-8">
                            {siteSettings.navigation.map((item: NonNullable<SiteSettings['navigation']>[number] | string, index: number) => {
                                // Handle both old string format and new object format
                                if (typeof item === 'string') {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                        >
                                            {item}
                                        </Link>
                                    );
                                }
                                
                                // Handle new navLink object format
                                const isExternal = item.external || (item.url && item.url.startsWith('http'));
                                
                                if (isExternal) {
                                    return (
                                        <a
                                            key={index}
                                            href={item.url}
                                            target={item.openInNewTab ? '_blank' : undefined}
                                            rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                                            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                        >
                                            {item.title}
                                        </a>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={index}
                                        href={item.url || '/'}
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                        target={item.openInNewTab ? '_blank' : ''}
                                        rel={item.openInNewTab ? 'noopener noreferrer' : ''}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
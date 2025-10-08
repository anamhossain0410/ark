import { SITE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
    const siteSettings = await client.fetch(SITE_QUERY);
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
                            {siteSettings.navigation.map((item: string, index: number) => (
                                <a
                                    key={index}
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
import type { Metadata } from "next";
import "./globals.css";
import { SITE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
// import { SiteSettings } from "@/sanity/types";
// Dynamic metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await client.fetch(SITE_QUERY);
  
  return {
    title: siteSettings?.siteTitle || "Our Blog",
    description: siteSettings?.siteDescription || "A delicious blog about cooking and baking",
    openGraph: {
      title: siteSettings?.siteTitle || "Our Blog",
      description: siteSettings?.siteDescription || "A delicious blog about cooking and baking",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await client.fetch(SITE_QUERY);
  const favicon = siteSettings?.favicon?.asset?.url;
  // console.log('favicon', favicon);
  // debugger;
  return (
    <html lang="en">
      {/* favicon from site Settings */}
      {favicon && <link rel="icon" href={favicon} />}
      {/* add google analytics script */}
      {siteSettings?.googleAnalytics && <script dangerouslySetInnerHTML={{ __html: siteSettings.googleAnalytics }} />}
      {/* add header scripts */}
      {siteSettings?.headerScripts && <script dangerouslySetInnerHTML={{ __html: siteSettings.headerScripts }} />}
      {/* add additional CSS */}
      {siteSettings?.additionalCSS && (
        <style 
          dangerouslySetInnerHTML={{ __html: siteSettings.additionalCSS }}
          precedence="default"
          href="sanity-additional-css"
        />
      )}
      
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

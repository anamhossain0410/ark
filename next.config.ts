import type { NextConfig } from "next";
// import { fetchRedirects } from "@/sanity/lib/fetchRedirects";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Note: i18n configuration is not supported in App Router
  // Internationalization is handled through the LanguageContext
  // async redirects() {
  //   return await fetchRedirects();
  // },
};

export default nextConfig;
// import { draftMode } from "next/headers";
// import { VisualEditing } from "next-sanity/visual-editing";
// import { DisableDraftMode } from "@/components/DisableDraftMode";
// import { Header } from "@/components/Header";
// import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/app/components/DisableDraftMode";
import { LanguageProvider } from "@/app/contexts/LanguageContext";
import { LanguageHandler } from "@/app/components/LanguageHandler";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
        <LanguageHandler />
        <Header />
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <Footer />
    </LanguageProvider>
  );
}
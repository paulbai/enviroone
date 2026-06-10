import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings } from "@/sanity/lib/pages";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer settings={settings ?? undefined} />
    </>
  );
}

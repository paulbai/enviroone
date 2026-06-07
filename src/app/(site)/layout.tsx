import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

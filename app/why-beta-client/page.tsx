import { Header } from "@/components/header";
import { WhyBetaClientPageContent } from "@/components/sections/why-beta-client-page-content";
import { FooterSection } from "@/components/sections/footer-section";

export default function WhyBetaClientPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WhyBetaClientPageContent />
      <FooterSection />
    </main>
  );
}

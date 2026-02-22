import { Header } from "@/components/header";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function WhyMonitoringPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PhilosophySection />
      <FooterSection />
    </main>
  );
}

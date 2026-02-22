import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Bug,
  Smartphone,
  BookOpen,
  Brain,
  Presentation,
  Link2,
  FileCheck,
  FileText,
  Lock,
  Users,
  RefreshCw,
  Ban,
  Image as ImageIcon,
  Bot,
} from "lucide-react";

export const KOVIU_IMAGES = [
  "/koviuImages/forex-trading-setup-vacant-office_482257-121461.avif",
  "/koviuImages/businessman-analyzing-stock-market-data_23-2151966721.jpg",
  "/koviuImages/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.avif",
  "/koviuImages/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif",
  "/koviuImages/person-playing-contactless_52683-132177.avif",
  "/koviuImages/cropped-view-manager-making-online-payment_1262-3199.avif",
  "/koviuImages/main.jpg",
  "/koviuImages/end.jpg",
] as const;

export const useCasesGridSpan: Record<string, string>[] = [
  { default: "col-span-1 row-span-2", sm: "sm:col-span-1 sm:row-span-2", lg: "lg:col-span-1 lg:row-span-2" },
  { default: "col-span-1 row-span-1", sm: "sm:col-span-2 sm:row-span-1", lg: "lg:col-span-2 lg:row-span-1" },
  { default: "col-span-1 row-span-1", sm: "sm:col-span-2 sm:row-span-1", lg: "lg:col-span-2 lg:row-span-1" },
  { default: "col-span-1 row-span-1", sm: "sm:col-span-2 sm:row-span-1", lg: "lg:col-span-2 lg:row-span-1" },
  { default: "col-span-1 row-span-1", sm: "sm:col-span-1 sm:row-span-1", lg: "lg:col-span-1 lg:row-span-1" },
  { default: "col-span-1 row-span-2", sm: "sm:col-span-1 sm:row-span-2", lg: "lg:col-span-1 lg:row-span-2" },
  { default: "col-span-1 row-span-1", sm: "sm:col-span-2 sm:row-span-1", lg: "lg:col-span-2 lg:row-span-1" },
  { default: "col-span-1 row-span-2", sm: "sm:col-span-1 sm:row-span-2", lg: "lg:col-span-1 lg:row-span-2" },
];

export const useCases: {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
  image?: string;
  imagePosition?: "top" | "left" | "right";
  imageSize?: "small" | "medium";
}[] = [
  { title: "Feature Rollouts", description: "Deploy new features to Koivu's accounts first via feature toggles. Test in production before general release.", icon: Rocket, span: "col-span-1 row-span-2", image: KOVIU_IMAGES[0], imagePosition: "top", imageSize: "medium" },
  { title: "Production Debugging", description: "Reproduce and investigate production issues using Koivu's account without privacy concerns.", icon: Bug, span: "col-span-2 row-span-1", image: KOVIU_IMAGES[1], imagePosition: "left", imageSize: "small" },
  { title: "Mobile & 2FA Testing", description: "Koivu has a real mobile phone. Test SMS verification, push notifications, and mobile app flows end-to-end.", icon: Smartphone, span: "col-span-2 row-span-1", image: KOVIU_IMAGES[4], imagePosition: "right", imageSize: "small" },
  { title: "Documentation & Training", description: "Create guides and training materials with real screenshots. Onboard new employees with realistic scenarios.", icon: BookOpen, span: "col-span-2 row-span-1", image: KOVIU_IMAGES[2], imagePosition: "left", imageSize: "medium" },
  { title: "AI/ML Training Data", description: "Train fraud detection, recommendation engines, or analytics models with real transaction patterns—compliantly.", icon: Brain, span: "col-span-1 row-span-1" },
  { title: "Sales Demos", description: "Show prospects real banking features with real data—not \"John Doe\" placeholders that look unprofessional.", icon: Presentation, span: "col-span-1 row-span-2", image: KOVIU_IMAGES[3], imagePosition: "top", imageSize: "medium" },
  { title: "Audit Demonstrations", description: "Show auditors your testing and monitoring processes using real workflows—without exposing customer data.", icon: FileCheck, span: "col-span-2 row-span-1", image: KOVIU_IMAGES[6], imagePosition: "right", imageSize: "medium" },
  { title: "External System Testing", description: "Koivu exists in production. Test integrations with SIX, TWINT, card networks, and correspondent banks using a real account.", icon: Link2, span: "col-span-1 row-span-2", image: KOVIU_IMAGES[5], imagePosition: "top", imageSize: "small" },
];

export const comparisonRows: { bestFor: string; anonymized: string; synthetic: string; koivu: string }[] = [
  { bestFor: "Volume / load testing", anonymized: "✓ Excellent", synthetic: "✓ Excellent", koivu: "◐ Limited" },
  { bestFor: "Pattern / behavior analysis", anonymized: "✓ Excellent", synthetic: "◐ Limited", koivu: "◐ Single client" },
  { bestFor: "Privacy-safe development", anonymized: "◐ With care", synthetic: "✓ Excellent", koivu: "✓ Yes" },
  { bestFor: "Production feature rollouts", anonymized: "✗ No", synthetic: "✗ No", koivu: "✓ Yes" },
  { bestFor: "Mobile / 2FA / SMS testing", anonymized: "✗ No", synthetic: "✗ No", koivu: "✓ Yes" },
  { bestFor: "Pennytest Payments", anonymized: "✗ No", synthetic: "✗ No", koivu: "✓ Yes" },
  { bestFor: "Full team access without restrictions", anonymized: "◐ Limited", synthetic: "✓ Yes", koivu: "✓ Yes" },
  { bestFor: "Realistic screenshots / demos", anonymized: "✗ No", synthetic: "✗ No", koivu: "✓ Yes" },
];

export const scopeBullets = [
  "Koivu is one client—it complements, not replaces, your volume testing with anonymized or synthetic data",
  "Koivu's transaction patterns reflect our business activities—not a statistically representative sample",
  "Best for targeted production testing, not comprehensive regression suites",
];

export const anonymizedBullets: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: FileText, title: "Compliance Overhead", text: "Requires careful anonymization processes to meet DSG (Switzerland), DSGVO/GDPR (EU), and banking secrecy requirements. Re-identification risk must be managed." },
  { icon: Lock, title: "Environment Restrictions", text: "Typically restricted to controlled test environments. Can't be used in production or shared with external partners for cross-system testing." },
  { icon: Users, title: "Access Controls Needed", text: "Even anonymized data may require access controls and audit trails. External contractors and offshore teams may be excluded." },
  { icon: RefreshCw, title: "Data Freshness", text: "Anonymized snapshots can become stale. Keeping test data in sync with production patterns requires ongoing effort." },
];

export const syntheticBullets: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Ban, title: "No Production Presence", text: "Synthetic clients don't exist in production. Feature rollouts and production validation require a different approach." },
  { icon: Smartphone, title: "No Mobile Device", text: "Synthetic clients can't receive SMS for 2FA, push notifications, or verify mobile app flows. End-to-end mobile testing requires real devices." },
  { icon: Link2, title: "External Partners", text: "TWINT, SIX, correspondent banks, card networks don't have your synthetic clients. Cross-system integration testing has limits." },
  { icon: Bot, title: "AI/ML Training", text: "Machine learning models often need real-world edge cases and behavioral patterns that synthetic data may not capture fully." },
  { icon: ImageIcon, title: "Documentation Realism", text: "Screenshots with \"John Doe\" and \"123 Test Street\" can look unprofessional in training materials and sales demos." },
  { icon: Bug, title: "Production Debugging", text: "Reproducing production issues often requires access to real production data and transactions." },
];

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </Suspense>
    <Footer />
  </>
);

export default Index;

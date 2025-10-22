import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ActivitiesSection />
      <ContactSection />
    </>
  );
}

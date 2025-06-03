import "../static/css/CoverPage.css";
import "../static/css/ProjectSection.css";
import "../static/css/SkillSection.css";
import "../static/css/EducationSection.css";
import "../static/css/AchievementSection.css";
import "../static/css/footer.css";
import "../static/css/AboutSection.css";
import "../static/css/IntroSection.css";
import "../static/css/HobbySection.css";

import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import AchievementSection from "../components/AchivementSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import HobbySection from "../components/HobbySection";
import ChatBot from "../components/ChatBot";

export default function CoverPage() {
  return (
    <div className="portfolio-container">
      <Header />
      <main className="main-container">
        <IntroSection />

        <AboutSection />

        <ProjectSection />

        <SkillSection />

        <EducationSection />

        <AchievementSection />

        <HobbySection />

        <ChatBot/>
    
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

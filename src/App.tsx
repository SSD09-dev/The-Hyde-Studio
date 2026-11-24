import { useState } from 'react';
import { ClientProject, PortfolioCategory, ServiceId, siteConfig } from './config/siteConfig';
import { usePreferences } from './context/PreferencesContext';
import { translations } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientsTrustStrip } from './components/ClientsTrustStrip';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesBento } from './components/ServicesBento';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { CommunitySpotlight } from './components/CommunitySpotlight';
import { ContactHub } from './components/ContactHub';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { usePointerCapabilities } from './hooks/usePointerCapabilities';

export default function App() {
  const { prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);
  const [inquiryService, setInquiryService] = useState<ServiceId | ''>('');
  const [inquiryBriefNote, setInquiryBriefNote] = useState<string>('');

  const scrollToElement = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToElement('#contact');
  };

  const handleExploreWork = () => {
    scrollToElement('#work');
  };

  const handleStartSimilarProject = (project: ClientProject) => {
    const matchingService = siteConfig.services.find(
      (s) => s.categoryFilter === project.category
    );
    if (matchingService) {
      setInquiryService(matchingService.id);
    }
    const localizedProjectTitle = t.portfolioSection.projects[project.id]?.title || project.title;
    setInquiryBriefNote(`${localizedProjectTitle} — `);
    setSelectedProject(null);
    setTimeout(() => scrollToElement('#contact'), 80);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[var(--color-background)] text-[var(--color-on-surface)]">
      <a href="#main-content" className="skip-to-content">
        {t.a11y.skipToContent}
      </a>

      <Navbar onStartProject={handleStartProject} />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection
          onStartProject={handleStartProject}
          onExploreWork={handleExploreWork}
        />

        <ClientsTrustStrip />

        <PortfolioSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenProject={setSelectedProject}
        />

        <ServicesBento />

        <HowWeWorkSection />

        <CommunitySpotlight />

        <ContactHub
          preselectedService={inquiryService}
          prefilledBriefNote={inquiryBriefNote}
          onOpenPrivacyPolicy={() => setActivePolicy('privacy')}
        />
      </main>

      <Footer onOpenPolicy={setActivePolicy} />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={handleStartSimilarProject}
      />

      <PolicyModal
        activePolicy={activePolicy}
        onSelectPolicy={setActivePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}

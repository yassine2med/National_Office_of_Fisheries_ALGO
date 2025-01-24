import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { EducationSection } from '@/components/page-ui/EducationSection';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';

export default function Home() {
    return (
        <main>
            <LandingPage />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactMeForm />
        </main>
    );
}

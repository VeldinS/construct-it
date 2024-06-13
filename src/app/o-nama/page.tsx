import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/about/landing-section";
import ProjectSection from "@/components/about/project-section";
import ProjectsList from "@/components/about/projects-list";

function AboutPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar/>
            <LandingSection />
            <ProjectSection />
            <ProjectsList />
        </div>
    );
}

export default AboutPage;
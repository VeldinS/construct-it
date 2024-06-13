import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/about/landing-section";
import ProjectSection from "@/components/about/project-section";
import ProjectsList from "@/components/about/projects-list";
import VideoSection from "@/components/about/video-section";
import FaqSection from "@/components/about/FAQ-section";

function AboutPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar/>
            <LandingSection />
            <ProjectSection />
            <ProjectsList />
            <VideoSection />
            <FaqSection />
        </div>
    );
}

export default AboutPage;
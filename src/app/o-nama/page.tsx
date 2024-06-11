import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/about/landing-section";

function AboutPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar/>
            <LandingSection />
        </div>
    );
}

export default AboutPage;
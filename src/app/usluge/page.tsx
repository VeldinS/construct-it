import LandingSection from "@/components/services/landing-section";
import Navbar from "@/components/navbar/Navbar";

function ServicesPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />

        </div>
    );
}

export default ServicesPage;
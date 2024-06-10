import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/home/landing-section";

export default function Home() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />
        </div>
    )
}

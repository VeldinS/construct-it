import Navbar from "@/components/navbar/Navbar";
import LandingSection from "@/components/home/landing-section";
import ServiceCard from "@/components/home/service-card";
import ProjectSection from "@/components/home/project-section";
import ParallaxSection from "@/components/home/parallax-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />
            <section className={'w-screen px-[5%] py-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-12'}>
                <ServiceCard title={'Izrada kamene galanterije'}
                             description={'Koristimo najkvalitetnije kamenje za kreiranje stolova, stolica, fontana i drugih elemenata.'}
                             image={'/assets/icons/kamen-icon.svg'}
                />
                <ServiceCard title={'Opće građevinske usluge'}
                             description={'Pružamo sve vrste građevinskih radova, od temelja do krova.'}
                             image={'/assets/icons/grad-usluge-icon.svg'}
                />
                <ServiceCard title={'Asfaltiranje'}
                             description={'Nudimo profesionalne usluge asfaltiranja prilaza, puteva i parkinga.'}
                             image={'/assets/icons/asfaltiranje-icon.svg'}
                />
                <ServiceCard title={'Kamenorezački radovi'}
                             description={'Specijalizirani smo za rezanje i obradu kamena za eksterijere i interijere.'}
                             image={'/assets/icons/kamen-rez-icon.svg'}
                />
                <ServiceCard title={'Konsultacije'}
                             description={'Naš tim stručnjaka nudi savjetodavne usluge za sve vaše građevinske projekte.'}
                             image={'/assets/icons/konsultacije-icon.svg'}
                />
                <ServiceCard title={'Upravljanje projektima'}
                             description={'Osiguravamo visoku kvalitetu upravljanja projektima za efikasnu realizaciju.'}
                             image={'/assets/icons/upr-projektima-icon.svg'}
                />
            </section>
            <ProjectSection />
            <ParallaxSection />
            <TestimonialsSection />
            <Footer />
        </div>
    )
}

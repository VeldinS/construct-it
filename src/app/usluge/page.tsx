import LandingSection from "@/components/services/landing-section";
import Navbar from "@/components/navbar/Navbar";
import ServiceGroup from "@/components/services/service-group";
import Footer from "@/components/footer/footer";

function ServicesPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />
            <ServiceGroup title={'nesto'} description={'adsdasdasda'} srv1={'usluga 1'} srv2={'uslg2'} srv3={'uslg2'} srv4={'uslg2'} srv5={'uslg2'} srv6={'uslg2'} srv7={'uslg2'} srv8={'uslg2'} srv9={'uslg2'} srv10={'uslg2'} float={'end'} />
            <Footer />
        </div>
    );
}

export default ServicesPage;
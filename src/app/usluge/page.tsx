import LandingSection from "@/components/services/landing-section";
import Navbar from "@/components/navbar/Navbar";
import ServiceGroup from "@/components/services/service-group";
import Footer from "@/components/footer/footer";

function ServicesPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />
            <div className={'w-full flex flex-col items-center justify-center gap-16'}>
                <ServiceGroup title={'Građevinske Usluge'}
                              description={'Naša kompanija nudi sveobuhvatne građevinske usluge koje pokrivaju sve aspekte izgradnje i renovacije. Naši stručnjaci koriste najnovije tehnologije i materijale kako bi osigurali visokokvalitetne rezultate.'}
                              srv1={'Izgradnja stambenih objekata'} srv2={'Izgradnja poslovnih objekata'}
                              srv3={'Renovacija i adaptacija prostora'} srv4={'Konstrukcija temelja'}
                              srv5={'Instalacija vodovodnih i kanalizacionih sistema'} srv6={'Postavljanje elektroinstalacija'}
                              srv7={'Završni građevinski radovi'} srv8={'Izgradnja infrastrukture (putevi, mostovi)'}
                              srv9={'Fasaderski radovi'} srv10={'Demontaža i rušenje starih objekata'}
                              float={'end'}
                />

            </div>
            <Footer />
        </div>
    );
}

export default ServicesPage;
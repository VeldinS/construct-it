import LandingSection from "@/components/services/landing-section";
import Navbar from "@/components/navbar/Navbar";
import ServiceGroup from "@/components/services/service-group";
import Footer from "@/components/footer/footer";
import ProjectsList from "@/components/about/projects-list";

function ServicesPage() {
    return (
        <div className={'w-screen h-auto bg-white flex flex-col items-center justify-center'}>
            <Navbar />
            <LandingSection />
            <div id={"sveusluge"} className={'w-full flex flex-col items-center justify-center gap-16'}>
                <ServiceGroup title={'Građevinske Usluge'}
                              description={'Naša kompanija nudi sveobuhvatne građevinske usluge koje pokrivaju sve aspekte izgradnje i renovacije. Naši stručnjaci koriste najnovije tehnologije i materijale kako bi osigurali visokokvalitetne rezultate.'}
                              srv1={'Izgradnja stambenih objekata'} srv2={'Izgradnja poslovnih objekata'}
                              srv3={'Renovacija i adaptacija prostora'} srv4={'Konstrukcija temelja'}
                              srv5={'Instalacija vodovodnih i kanalizacionih sistema'} srv6={'Postavljanje elektroinstalacija'}
                              srv7={'Završni građevinski radovi'} srv8={'Izgradnja infrastrukture (putevi, mostovi)'}
                              srv9={'Fasaderski radovi'} srv10={'Demontaža i rušenje starih objekata'}
                              float={'end'}
                />
                <ServiceGroup title={'Logističke Usluge'}
                              description={'Pored građevinskih radova, nudimo i širok spektar logističkih usluga. Naš cilj je osigurati efikasnu i pouzdanu podršku svim našim klijentima kroz kvalitetno planiranje i organizaciju.'}
                              srv1={'Transport građevinskog materijala'} srv2={'Upravljanje skladištima'}
                              srv3={'Distribucija i dostava opreme'} srv4={'Organizacija gradilišta'}
                              srv5={'Prijevoz teške mehanizacije'} srv6={'Montaža i demontaža opreme'}
                              srv7={'Koordinacija logističkih operacija'} srv8={'Upravljanje zalihama'}
                              srv9={'Planiranje i optimizacija rute'} srv10={'Usluge pakiranja i distribucije'}
                              float={'start'}
                />
                <ServiceGroup title={'IT Usluge'}
                              description={'Naša kompanija pruža i napredne IT usluge kako bi podržala sve aspekte vaših građevinskih i logističkih potreba. Naš tim IT stručnjaka je tu da osigura da vaši projekti teku glatko i efikasno.'}
                              srv1={'Projektovanje i instalacija mreža'} srv2={'IT podrška i održavanje'}
                              srv3={'Razvoj softvera za upravljanje projektima'} srv4={'Implementacija sigurnosnih sistema'}
                              srv5={'Konsultacije i analiza IT infrastrukture'} srv6={'Trening i obuka za upotrebu IT sistema'}
                              srv7={'Integracija softverskih rješenja'} srv8={'Cloud usluge i skladištenje podataka'}
                              srv9={'Upravljanje IT projektima'} srv10={'Rješenja za cyber sigurnost'}
                              float={'end'}
                />
                <ServiceGroup title={'Specijalni Projekti'}
                              description={'Ako imate specifične potrebe koje ne spadaju u standardne građevinske, logističke ili IT usluge, naš tim je spreman da razvije prilagođena rješenja samo za vas. Nudimo fleksibilne i kreativne pristupe kako bismo ispunili sve vaše zahtjeve.'}
                              srv1={'Specijalni kameni radovi (unikatne skulpture, fontane)'} srv2={'Unikatni dizajn interijera i eksterijera'}
                              srv3={'Projektovanje i izgradnja tematskih parkova'} srv4={'Održivost i ekološki projekti'}
                              srv5={'Restauracija povijesnih objekata'} srv6={'Custom IT rješenja za specifične industrije'}
                              srv7={'Posebni umjetnički projekti'} srv8={'Eksperimentalni građevinski projekti'}
                              srv9={'Korištenje recikliranih materijala'} srv10={'Inovativna rješenja za urbani razvoj'}
                              float={'start'}
                />
            </div>
            <ProjectsList />
            <Footer />
        </div>
    );
}

export default ServicesPage;
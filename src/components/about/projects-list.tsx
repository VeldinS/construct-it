'use client'

import React, { useState } from "react";
import ProjectCard from "@/components/about/project-card";

function ProjectsList() {

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section id={'projekti'}
                 className={'w-screen bg-[#f7f7f7] h-auto py-24 px-[5%] md:px-[15%] flex flex-col items-center justify-center gap-8 md:gap-12'}>
            <h1 className={'text-black font-rubik text-3xl sm:text-4xl font-bold'}>Posljednji Projekti</h1>
            <div className={'w-full flex flex-col items-center justify-center gap-12'}>
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <div className={'w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-12'}>
                    <ProjectCard title={'Izgradnja poslovnog centra "Nova Era"'}
                                 description={'Naš tim je uspješno završio izgradnju modernog poslovnog centra koristeći najkvalitetnije materijale i najnovije građevinske tehnike za postizanje vrhunskog rezultata.'}
                                 image={'/assets/projects/project1.jpg'}
                    />
                    <ProjectCard title={'Izgradnja stambenog kompleksa'}
                                 description={'Izgradili smo luksuzni stambeni kompleks sa svim modernim sadržajima, koristeći visokokvalitetne materijale i napredne građevinske metode za maksimalnu udobnost.'}
                                 image={'/assets/projects/project2.jpg'}
                    />
                    <ProjectCard title={'Sanacija mosta "Solid Bridge"'}
                                 description={'Proveli smo opsežnu sanaciju mosta, ojačali strukturu i unaprijedili sigurnosne standarde, osiguravajući dugotrajnost i sigurnost za sve korisnike.'}
                                 image={'/assets/projects/project3.jpg'}
                    />
                </div>
            </div>
            <div className={`w-full flex flex-col items-center justify-center gap-12 transition-all duration-500 ${showMore ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <div className={'w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-12'}>
                    <ProjectCard title={'Obnova muzeja "Heritage"'}
                                 description={'Radili smo na obnovi povijesnog muzeja, pažljivo restaurirajući svaki detalj kako bismo očuvali kulturnu baštinu i osigurali trajnu zaštitu eksponata.'}
                                 image={'/assets/projects/project4.jpg'}
                    />
                    <ProjectCard title={'Rekonstrukcija dvorane "Arena"'}
                                 description={'Obnovili smo sportsku dvoranu, zamijenili podove i instalirali najnoviju opremu, čime smo osigurali optimalne uslove za sve sportske aktivnosti i događaje.'}
                                 image={'/assets/projects/project5.jpg'}
                    />
                    <ProjectCard title={'Renovacija hotela "Bellevue"'}
                                 description={'Izvršili smo temeljitu renovaciju hotela, uključujući fasadu, unutrašnje prostorije i bazen, koristeći vrhunski kamen za elegantan i moderan izgled.'}
                                 image={'/assets/projects/project6.jpg'}
                    />
                </div>
            </div>
            <button
                onClick={toggleShowMore}
                className='text-base font-rubik font-semibold text-black hover:text-white tracking-widest px-6 py-3 border-4 border-black bg-transparent hover:bg-black transition-all duration-500'>
                {showMore ? 'PRIKAŽI MANJE' : 'PRIKAŽI VIŠE'}
            </button>
        </section>
    );
}

export default ProjectsList;
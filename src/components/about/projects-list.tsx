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
                 className={'w-screen h-auto py-24 px-[5%] md:px-[15%] flex flex-col items-center justify-center gap-8 md:gap-12'}>
            <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Posljednji Projekti</h1>
            <div className={'w-full flex flex-col items-center justify-center gap-12'}>
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <div className={'w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-12'}>
                    <ProjectCard title={'Projekat 1'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
                                 image={'/assets/projects/project1.jpg'}
                    />
                    <ProjectCard title={'Projekat 2'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
                                 image={'/assets/projects/project2.jpg'}
                    />
                    <ProjectCard title={'Projekat 3'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
                                 image={'/assets/projects/project3.jpg'}
                    />
                </div>
            </div>
            <div className={`w-full flex flex-col items-center justify-center gap-12 transition-all duration-500 ${showMore ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <div className={'w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-12'}>
                    <ProjectCard title={'Projekat 4'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
                                 image={'/assets/projects/project4.jpg'}
                    />
                    <ProjectCard title={'Projekat 5'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
                                 image={'/assets/projects/project5.jpg'}
                    />
                    <ProjectCard title={'Projekat 6'}
                                 description={'Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad. Detaljniji opis za projekat iznad.'}
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
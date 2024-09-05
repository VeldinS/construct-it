'use client'
import React, {useEffect, useRef} from "react";


function ProjectSection() {

    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={'h-auto lg:h-screen w-full max-w-full flex flex-col lg:flex-row items-center justify-center bg-white'}>
            <div className="relative w-full lg:w-1/3 h-[30vh] lg:h-full">
                <div
                    ref={bgRef}
                    className="bg-[url('/assets/other/stone-wall.jpg')] absolute inset-0 bg-fixed bg-contain md:bg-cover bg-center"
                />
            </div>
            <div className={' w-full lg:w-2/3 h-auto lg:h-full flex flex-col items-start justify-start'}>
                <div
                    className={'w-full h-4/5 bg-[#F7F7F7] flex flex-col items-start justify-center gap-8 px-[8%] py-12 lg:py-0'}>
                    <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Projekti i Materijali</h1>
                    <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                    <div className={'w-full flex flex-col sm:flex-row justify-start items-start gap-8'}>
                        <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full sm:w-1/2'}>
                            Naš tim je ponosan na brojne projekte koje smo realizovali širom zemlje. Koristimo samo najkvalitetnije materijale, pažljivo birane da bi zadovoljili najviše standarde. Bez obzira na veličinu i složenost projekta, naš cilj je uvijek isti - pružiti vrhunski kvalitet i dugotrajnost.
                        </p>
                        <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full sm:w-1/2'}>
                            Kamen, beton i asfalt su osnovni materijali koje koristimo u našim građevinskim radovima. Svaki materijal se pažljivo obrađuje i postavlja, osiguravajući da svaki završeni projekt izgleda predivno i traje dugo.
                        </p>
                    </div>
                </div>
                <div className={'w-full h-auto md:h-1/5 bg-white flex flex-col md:flex-row items-center justify-center'}>
                    <div className={'w-full md:w-1/2 h-full bg-orange-primary py-4 md:py-0 flex flex-col justify-center items-center gap-2'}>
                        <h1 className={'font-rubik text-5xl text-black font-bold'}>4</h1>
                        <p className={'font-rubik text-lg text-black font-bold'}>GODINE POSTOJANJA</p>
                    </div>
                    <div className={'w-full md:w-1/2 h-full bg-[#2A2A2A] py-4 md:py-0 flex flex-col justify-center items-center gap-2'}>
                        <h1 className={'font-rubik text-5xl text-white font-bold'}>20+</h1>
                        <p className={'font-rubik text-lg text-white font-bold'}>PROJEKATA</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default ProjectSection;
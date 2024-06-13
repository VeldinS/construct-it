import React from 'react';
7
import arrow from '@/assets/icons/arrow-right.svg'
import Image from "next/image";
import ButtonTertiary from "@/components/buttons/button-tertiary";

interface serviceProps {
    title: string;
    description: string;
    srv1: string,
    srv2: string,
    srv3: string,
    srv4: string,
    srv5: string,
    srv6: string,
    srv7: string,
    srv8: string,
    srv9: string,
    srv10: string,
    float: string
}
function ServiceGroup({title, description, srv1, srv2, srv3, srv4, srv5, srv6, srv7, srv8, srv9, srv10, float}: serviceProps) {
    return (
        <section className={`w-screen h-auto flex flex-col items-${float} justify-start gap-16`}>
            <div className={'relative z-2 shadow-xl w-full lg:w-[80vw] h-auto bg-[#F7F7F7] flex flex-col items-${float} justify-start gap-8 sm:gap-16 pt-12 sm:pt-20'}>
                <div className={'flex flex-col items-start justify-start gap-6 sm:gap-12 px-[3%] lg:px-[10%] '}>
                    <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>
                        {title}
                    </h1>
                    <div className={'w-[50px] h-[10px] bg-orange-primary '}></div>
                    <div className={'flex flex-col items-start justify-start gap-6'}>
                        <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full sm:w-1/2'}>
                            {description}
                        </p>
                        <div className={'w-full flex flex-col md:flex-row items-start justify-start gap-6 md:gap-32'}>
                            <div className={'flex flex-col items-start justify-start gap-6'}>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv1}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv2}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv3}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv4}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv5}</p>
                                </div>
                            </div>
                            <div className={'flex flex-col items-start justify-start gap-6'}>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv6}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv7}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv8}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv9}</p>
                                </div>
                                <div className={'flex flex-row items-center justify-start gap-2'}>
                                    <Image src={arrow} alt={'Arrow icon.'} width={20} height={20}/>
                                    <p className={'text-[#666666] text-lg font-rubik'}>{srv10}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full h-auto bg-white flex flex-col md:flex-row items-center justify-center'}>
                    <div
                        className={'w-full md:w-1/2 h-full bg-[#2A2A2A] py-6 flex flex-col justify-center items-center gap-2'}>
                        <ButtonTertiary text={'KONTAKTIRAJ NAS'} link={'#kontakt'} />
                    </div>
                    <div
                        className={'w-full md:w-1/2 h-full bg-orange-primary py-6 flex flex-col justify-center items-center gap-2'}>
                        <ButtonTertiary text={'KONTAKTIRAJ NAS'} link={'#kontakt'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceGroup;
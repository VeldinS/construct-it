import React from 'react';

import ButtonSecondary from "@/components/buttons/button-secondary";
import FAQ from "@/components/about/FAQ";


function FaqSection() {
    return (
        <section className={'h-auto lg:h-screen w-full max-w-full py-16 lg:py-[5%] px-[5%] lg:px-[10%] bg-[#F7F7F7] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0'}>
            <div
                className="relative bg-transparent w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-start justify-start gap-12 px-0 lg:px-6">
                <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl tracking-widest font-bold'}>Odgovori na Vaša Najčešća Pitanja</h1>
                <div className={'w-[50px] h-[5px] bg-orange-primary'}></div>
                <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full'}>
                    Razumijemo da možete imati mnogo pitanja o našim uslugama i načinu rada. Ovdje smo da vam pružimo sve potrebne informacije i osiguramo da imate jasno razumijevanje naših procesa.
                    Ukoliko ne možete pronaći odgovori, kontaktirajte nas ispod.
                </p>
                <div className={'hidden lg:flex'}>
                    <ButtonSecondary text={'KONTAKTIRAJ NAS'} link={'#kontakt'}/>
                </div>
            </div>
            <div className={' w-full lg:w-2/3 h-auto lg:h-full bg-transparent flex flex-col items-start justify-start gap-[2px]'}>
                <FAQ question={'Koje materijale koristite u svojim projektima?'}
                     answer={'Koristimo visokokvalitetni kamen, beton i asfalt za sve naše građevinske radove.'}
                />
                <FAQ question={'Koliko traje prosječan projekt?'}
                     answer={'Trajanje projekta zavisi od njegove veličine i kompleksnosti, ali obično se kreće od nekoliko sedmica do nekoliko mjeseci.'}
                />
                <FAQ question={'Da li nudite konsultacijske usluge?'}
                     answer={'Da, naš tim stručnjaka je dostupan za konsultacije kako bismo vam pomogli u planiranju i realizaciji vaših projekata.'}
                />
                <FAQ question={'Kako mogu dobiti ponudu za svoj projekt?'}
                     answer={'Možete nas kontaktirati putem telefona, emaila ili kontakt forme ispod, a naš tim će vam pripremiti detaljnu ponudu.'}
                />
                <FAQ question={'Koje tehnologije koristite u svojim radovima?'}
                     answer={'Koristimo najnovije tehnologije i metode u svim aspektima naših građevinskih radova, uključujući obradu kamena i asfaltiranje.'}
                />
            </div>
        </section>
    );
}

export default FaqSection;
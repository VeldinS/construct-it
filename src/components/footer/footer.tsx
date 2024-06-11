import Image from "next/image";
import facebookIcon from '@/assets/icons/facebook.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import locationIcon from '@/assets/icons/location-icon.svg';
import phoneIcon from '@/assets/icons/phone-icon.svg';
import mailIcon from '@/assets/icons/mail-icon.svg';

import Link from "next/link";

function Footer() {
    return (
        <section id={'kontakt'} className={'w-screen h-auto flex flex-col lg:flex-row items-stretch justify-center'}>
            <form className={'w-full lg:w-1/2 h-auto bg-orange-primary py-4 lg:px-16 py-16 flex flex-col justify-start items-start gap-8'}>
                <h1 className={'text-[#2A2A2A] font-rubik text-3xl md:text-4xl font-bold tracking-wider'}>
                    Kontakt
                </h1>
                <div className={'w-[50px] h-[5px] bg-[#2A2A2A] '}></div>
                <div className={'w-full flex flex-col justify-start items-center gap-4'}>
                    <div className={'w-full flex flex-row justify-start items-center gap-8'}>
                        <input
                            type="text"
                            id="name"
                            className="w-1/2 py-4 px-4 font-rubik text-lg font-extralight"
                            placeholder="Ime"
                        />
                        <input
                            type="text"
                            id="email"
                            className="w-1/2 py-4 px-4 font-rubik text-lg font-extralight"
                            placeholder="Email / broj telefona"
                        />
                    </div>
                    <textarea
                        id="textarea"
                        className="w-full py-4 px-4 pb-16 font-rubik text-lg font-extralight"
                        placeholder="Poruka / upit"
                    ></textarea>
                    <div className={'w-full flex flex-row items-end justify-end'}>
                        <button type={'submit'}>
                            <p className='text-base font-rubik font-semibold text-white hover:text-black tracking-widest px-6 py-3 border-4 border-white bg-transparent hover:bg-white transition-all duration-500'>
                                POŠALJI
                            </p>
                        </button>
                    </div>
                </div>
            </form>
            <div className={'w-full lg:w-1/2 h-auto bg-white'}>
                <div className={'w-full h-auto bg-[#2A2A2A] flex flex-row justify-center items-center gap-16 py-10'}>
                    <Link href={'/'}>
                        <Image src={facebookIcon} alt={'Facebook icon'} width={30} height={40}/>
                    </Link>
                    <Link href={'/'}>
                        <Image src={instagramIcon} alt={'Instagram icon'} width={30} height={40}/>
                    </Link>
                    <Link href={'/'}>
                        <Image src={linkedinIcon} alt={'LinkedIn icon'} width={30} height={40}/>
                    </Link>
                </div>
                <div className={'w-full bg-white flex flex-col justify-start items-center lg:items-start py-8 pl-0 lg:pl-[10%]'}>
                    <div className={'flex flex-col items-center lg:items-start justify-center lg:justify-start gap-8'}>
                        <Link href={'/'} className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={locationIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>Sarajevo, Vrbanja 2</p>
                        </Link>
                        <Link href={'/'} className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={mailIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>info@construct.it</p>
                        </Link>
                        <Link href={'/'} className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={phoneIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>+387 62 123 123</p>
                        </Link>
                    </div>
                </div>
                </div>
        </section>
);
}

export default Footer;
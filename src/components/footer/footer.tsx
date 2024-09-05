import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/footer/contact-form";

import facebookIcon from '@/assets/icons/facebook.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import locationIcon from '@/assets/icons/location-icon.svg';
import phoneIcon from '@/assets/icons/phone-icon.svg';
import mailIcon from '@/assets/icons/mail-icon.svg';


function Footer() {
    return (
        <section id={'kontakt'} className={'w-full max-w-full h-auto flex flex-col lg:flex-row items-stretch justify-center'}>
            <ContactForm />
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
                        <Link href={'https://www.google.com/maps/place/Safeta+Zajke+267,+Sarajevo+71000/data=!4m2!3m1!1s0x4758cb80179564d3:0x3701c5b33023a164?sa=X&ved=1t:242&ictx=111'} className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={locationIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>Safeta Zajke 267, Sarajevo</p>
                        </Link>
                        <Link href="mailto:kontakt@cnstrt.com" className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={mailIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>kontakt@cnstrt.com</p>
                        </Link>
                        <Link href={'tel:+38762250640'} className={'flex flex-col lg:flex-row justify-center items-center gap-4'}>
                            <Image src={phoneIcon} alt={'Contact icon.'} width={40} height={40}/>
                            <p className={'text-black text-lg font-rubik font-light tracking-widest'}>+387 62 250 640</p>
                        </Link>
                    </div>
                </div>
                </div>
        </section>
);
}

export default Footer;
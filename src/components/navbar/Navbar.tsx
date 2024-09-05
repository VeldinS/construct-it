'use client'
import React, {useEffect, useState} from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

import Image from "next/image";
import Link from "next/link";

import logoImage from '@/assets/logo/logo.png';
import buildingIcon from '@/assets/icons/Building.svg';
import projectsIcon from '@/assets/icons/Projects.svg';
import servicesIcon from '@/assets/icons/Services.svg';
import contactIcon from '@/assets/icons/Contact.svg';
import hamburgerIcon from '@/assets/icons/Hamburger.svg';
import closeIcon from '@/assets/icons/Close.svg';


function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    let scrollTimeout:any = null;

    const handleScroll = () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        setIsScrolling(true);

        scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
        }, 200); // Adjust the delay as needed
    };

    useEffect(() => {
        const initialLoadTimeout = setTimeout(() => {
            setIsInitialLoad(false);
        }, 5000);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            clearTimeout(initialLoadTimeout);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className={`fixed top-0 z-[999] w-full max-w-full bg-white px-[2%] py-1 md:py-2 flex flex-row items-center justify-between transition-transform duration-300 ${isInitialLoad || isScrolling ? '-translate-y-[150%]' : 'translate-y-0'}`}>
            <Link href={'/'}>
                <Image src={logoImage} alt={'Logo for Construct..it'} width={100} height={40}/>
            </Link>
            <div className="hidden md:flex flex-row items-end justify-center lg:gap-12 gap-6 ">
            <Link href={'/o-nama'} className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={buildingIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>O nama</p>
                </Link>
                <Link href={'/o-nama#projekti'} className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={projectsIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Projekti</p>
                </Link>
                <Link href={'/usluge'}className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={servicesIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Usluge</p>
                </Link>
                <ScrollLink to={'kontakt'} smooth={true} duration={1000} className={'flex cursor-pointer flex-row items-center justify-center gap-2'}>
                    <Image src={contactIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Kontakt</p>
                </ScrollLink>
            </div>
            <div className="relative flex md:hidden ">
                <button onClick={toggleMenu}>
                    <Image src={hamburgerIcon} alt={'Hamburger icon for mobile menu.'} width={40} height={40}/>
                </button>
                <div className={`fixed top-0 right-0 w-full h-screen bg-[#F7F7F7] text-white transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-2xl">
                            <Image src={closeIcon} alt={'Hamburger icon for mobile menu.'} width={30} height={30}/>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start pl-4 justify-center h-1/2">
                        <div className="flex flex-col items-start justify-center gap-12">
                            <Link onClick={toggleMenu} href={"/o-nama"} className={'flex flex-row items-center justify-center gap-4'}>
                                <Image src={buildingIcon} alt={'Building svg icon.'} width={50} height={50}/>
                                <p className={'font-poppins text-black text-3xl font-bold tracking-widest uppercase'}>O nama</p>
                            </Link>
                            <Link onClick={toggleMenu} href={`/o-nama#projekti`} className={'flex flex-row items-center justify-center gap-4'}>
                                <Image src={projectsIcon} alt={'Building svg icon.'} width={50} height={50}/>
                                <p className={'font-poppins text-black text-3xl font-bold tracking-widest uppercase'}>Projekti</p>
                            </Link>
                            <Link onClick={toggleMenu} href={"/usluge"} className={'flex flex-row items-center justify-center gap-4'}>
                                <Image src={servicesIcon} alt={'Building svg icon.'} width={50} height={50}/>
                                <p className={'font-poppins text-black text-3xl font-bold tracking-widest uppercase'}>Usluge</p>
                            </Link>
                            <ScrollLink onClick={toggleMenu} to={'kontakt'} smooth={true} duration={1000} className={'flex cursor-pointer flex-row items-center justify-center gap-4'}>
                                <Image src={contactIcon} alt={'Building svg icon.'} width={50} height={50}/>
                                <p className={'font-poppins text-black text-3xl font-bold tracking-widest uppercase'}>Kontakt</p>
                            </ScrollLink>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-6 absolute bottom-[15%] left-0 right-0">
                            <Link onClick={toggleMenu} href="mailto:info@cnstrt.com" className={'font-poppins text-black text-xl font-medium tracking-widest'}>
                                info@cnstrt.com
                            </Link>
                            <Link onClick={toggleMenu} href={'/'}>
                                <Image src={logoImage} alt={'Logo for Construct..it'} width={130} height={40}/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
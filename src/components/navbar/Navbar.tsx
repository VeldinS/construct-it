'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import logoImage from '@/assets/logo/logo.png';
import buildingIcon from '@/assets/icons/Building.svg';
import projectsIcon from '@/assets/icons/Projects.svg';
import servicesIcon from '@/assets/icons/Services.svg';
import contactIcon from '@/assets/icons/Contact.svg';
import hamburgerIcon from '@/assets/icons/Hamburger.svg';
import closeIcon from '@/assets/icons/Close.svg';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-screen max-w-[1800px] bg-white px-[2%] py-0 md:py-2 flex flex-row items-center justify-between">
            <Image src={logoImage} alt={'Logo for Construct..it'} width={100} height={40}/>
            <div className="hidden md:flex flex-row items-end justify-center lg:gap-12 gap-6 ">
                <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={buildingIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>O nama</p>
                </Link>
                <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={projectsIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Projekti</p>
                </Link>
                <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={servicesIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Usluge</p>
                </Link>
                <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                    <Image src={contactIcon} alt={'Building svg icon.'} width={25} height={25}/>
                    <p className={'font-poppins text-black text-lg font-medium tracking-widest'}>Kontakt</p>
                </Link>
            </div>
            <div className="relative flex md:hidden ">
                <button onClick={toggleMenu}>
                    <Image src={hamburgerIcon} alt={'Hamburger icon for mobile menu.'} width={40} height={40}/>
                </button>
                <div className={`fixed top-0 right-0 w-screen h-screen bg-white text-white transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-2xl">
                            <Image src={closeIcon} alt={'Hamburger icon for mobile menu.'} width={30} height={30}/>
                        </button>
                    </div>
                    <nav className="flex flex-col items-center justify-center h-1/2">
                        <div className="flex flex-col items-center justify-center gap-10">
                            <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                                <Image src={buildingIcon} alt={'Building svg icon.'} width={35} height={35}/>
                                <p className={'font-poppins text-black text-xl font-medium tracking-widest'}>O nama</p>
                            </Link>
                            <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                                <Image src={projectsIcon} alt={'Building svg icon.'} width={35} height={35}/>
                                <p className={'font-poppins text-black text-xl font-medium tracking-widest'}>Projekti</p>
                            </Link>
                            <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                                <Image src={servicesIcon} alt={'Building svg icon.'} width={35} height={35}/>
                                <p className={'font-poppins text-black text-xl font-medium tracking-widest'}>Usluge</p>
                            </Link>
                            <Link href="/" className={'flex flex-row items-center justify-center gap-2'}>
                                <Image src={contactIcon} alt={'Building svg icon.'} width={35} height={35}/>
                                <p className={'font-poppins text-black text-xl font-medium tracking-widest'}>Kontakt</p>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-6 absolute bottom-12 left-0 right-0">
                            <Link href="/" className={'font-poppins text-black text-xl font-medium tracking-widest'}>
                                info@construct.it
                            </Link>
                            <Image src={logoImage} alt={'Logo for Construct..it'} width={130} height={40}/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
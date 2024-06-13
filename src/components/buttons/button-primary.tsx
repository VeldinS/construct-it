'use client'

import React from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

interface buttonProps {
    text: string,
    link: string
}

function ButtonPrimary({ text, link }: buttonProps) {
    return (
        <ScrollLink to={'kontakt'} smooth={true} duration={1000} className={'flex cursor-pointer flex-row items-center justify-center'}>
            <p className='text-base font-rubik font-semibold text-white tracking-widest px-6 py-3 border-4 border-orange-primary bg-transparent hover:bg-orange-primary transition-all duration-500'>
                {text}
            </p>
        </ScrollLink>
    );
}

export default ButtonPrimary;

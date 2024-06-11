import React from 'react';
import Link from "next/link";

interface buttonProps {
    text: string,
    link: string
}

function ButtonSecondary({ text, link }: buttonProps) {
    return (
        <Link href={link}>
            <p className='text-base font-rubik font-semibold text-white hover:text-black tracking-widest px-6 py-3 border-4 border-white hover:border-black bg-transparent hover:bg-black transition-all duration-500'>
                {text}
            </p>
        </Link>
    );
}

export default ButtonSecondary;

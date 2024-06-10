import React from 'react';
import Link from "next/link";

interface buttonProps {
    text: string,
    link: string
}

function ButtonPrimary({ text, link }: buttonProps) {
    return (
        <Link href={link}>
            <p className='text-base font-rubik font-semibold text-white tracking-widest px-6 py-3 border-2 border-orange-primary bg-transparent hover:bg-orange-primary transition-all duration-500'>
                {text}
            </p>
        </Link>
    );
}

export default ButtonPrimary;

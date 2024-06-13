'use client'
import {useState} from 'react';

interface projectCardProps {
    question: string;
    answer: string;
}

function Faq({question, answer}: projectCardProps) {

    const [openQuestion, setOpenQuestion] = useState(false);

    const toggleShowMore = () => {
        setOpenQuestion(!openQuestion);
    };

    return (
        <div className={'w-full h-auto bg-white py-6 md:py-8 px-4 md:px-8 flex flex-col items-start justify-start gap-4'}>
            <div className={'w-full flex flex-row justify-between items-start gap-2 sm:gap-0'}>
                <p className={'text-lg text-black font-rubik tracking-wider font-bold'}>{question}</p>
                <p onClick={toggleShowMore}
                   className={`flex items-center justify-center min-w-[30px] min-h-[30px] cursor-pointer text-xl leading-none hover:bg-[#2A2A2A] hover:scale-110 text-white rounded-full transition-all duration-500 ${openQuestion ? 'rotate-45 bg-[#2A2A2A]' : 'rotate-0 bg-orange-primary'}`}>+</p>
            </div>
            <p className={`text-lg text-[#666666] font-rubik tracking-widest font-light transition-all duration-500 ${openQuestion ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{answer}</p>
        </div>
    );
}

export default Faq;
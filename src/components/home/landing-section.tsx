"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./image-slider";
import ButtonPrimary from "@/components/buttons/button-primary";

function LandingSection() {
    const images = [
        'https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307786.jpg?t=st=1718031043~exp=1718034643~hmac=5f95be98558787fa07bc9177cbf452c9a750d055b5e0391e86448068453c3917&w=2000',
        'https://img.freepik.com/free-photo/photorealistic-stone-wall-surface_23-2151214790.jpg?t=st=1718031008~exp=1718034608~hmac=5d062f3b20e34761680165f4fe7844db70408980320873d8e86f50fa1a6cca1b&w=2000',
        'https://img.freepik.com/free-photo/discussing-blueprint_1098-18180.jpg?t=st=1718031054~exp=1718034654~hmac=157abbb9df52efd3867612f73ef1c817bd5ddcf1dde98fad0ae7906172f20f1d&w=2000',
        'https://img.freepik.com/free-photo/beautiful-black-white-upshot-new-york-city-subway-s-wtc-cortlandt-station-k-oculus_181624-1651.jpg?t=st=1718031048~exp=1718034648~hmac=426de53e9f9848533f75745f3427a1658fd22d5cfebb07a5e07ed6807f3d5999&w=2000',
        'https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?t=st=1718031046~exp=1718034646~hmac=970e123b3332bb1088e541e0d73e89be2cfa6089a80849cc1b55acc3912fa14a&w=2000',
        ];

    return (
        <section className={'w-screen h-screen relative bg-cover bg-center bg- flex flex-col items-center justify-center gap-8'}>
            <ImagesSlider className="h-full " images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 md:py-6">
                    Construct.IT
                </motion.p>
                <p className={'text-white text-center font-rubik font-medium text-lg py-4 md:py-6'}>Vaš pouzdan partner za sve vrste građevinskih radova.</p>
                <div className={'py-4 md:py-6'}>
                    <ButtonPrimary text={'POKRENIMO PROJEKAT'} link={'#kontakt'} />
                </div>
            </motion.div>
        </ImagesSlider>
        </section>
    );
}

export default LandingSection;
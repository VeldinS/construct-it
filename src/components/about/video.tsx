'use client'
import React, { useEffect, useState } from 'react';

const VideoBackgroundDiv = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Function to check the screen size
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        // Initial check
        checkScreenSize();

        // Add event listener to check screen size on resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div className={'relative hidden md:flex w-full h-4/5  flex-col items-start justify-center gap-8 px-[8%] py-12 lg:py-0 bg-[#F7F7F7]'}>
            {isLargeScreen && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/assets/videos/video.mp4"
                    autoPlay
                    loop
                    muted
                />
            )}
        </div>
    );
};

export default VideoBackgroundDiv;

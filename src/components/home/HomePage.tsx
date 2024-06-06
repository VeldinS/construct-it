"use client";
import React from "react";
import Landing from "@/components/home/Landing/Landing";
import {CardsSection} from "@/components/home/Cards/Cards-section";
import {SpotlightSection} from "@/components/home/Spotlight/Spotlight-section";
import {ImagesSection} from "@/components/home/Parallax/Images-section";
import {InfiniteCardsSection} from "@/components/home/MovingCards/InfiniteCards-section";
import {NewsletterSection} from "@/components/home/Newsletter/Newsletter-section";

export function HomePage() {
    return (
        <>
            <Landing />
            <CardsSection />
            <SpotlightSection />
            <ImagesSection />
            <InfiniteCardsSection />
            <NewsletterSection />
        </>

    );
}

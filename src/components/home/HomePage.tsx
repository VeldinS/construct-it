"use client";
import React from "react";
import Landing from "@/components/home/Landing/Landing";
import {CardsSection} from "@/components/home/Cards/Cards-section";

export function HomePage() {
    return (
        <>
            <Landing />
            <CardsSection />
        </>

    );
}

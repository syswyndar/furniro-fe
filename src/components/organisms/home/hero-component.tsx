'use client'

import Image from "next/image"

export const HeroComponent = () => {
    return (
        <div className="h-screen w-full relative">
            <Image src={"/images/hero-image.png"} alt="hero" sizes="100vw" fill style={{objectFit: 'cover'}}/>
        </div>
    )
}
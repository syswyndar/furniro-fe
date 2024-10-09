'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

interface Iprops {
    className?: string
    title: string
    onClick: () => void
}

const CategoriesCard = ({className, title, onClick}: Iprops) => {
    return (
        <>
        <div className={cn("w-full rounded-md overflow-hidden hover:cursor-pointer shadow-md", className)} onClick={() => onClick()}>
            <div className="w-full h-[480px] relative">
                <Image src={"/images/categories-img.png"} alt="hero" sizes="100vw" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="text-center py-6">
                <h4 className="font-bold">{title}</h4>
            </div>
        </div>
        </>
    )
}

export default CategoriesCard
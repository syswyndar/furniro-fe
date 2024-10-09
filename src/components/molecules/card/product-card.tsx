'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

interface Iprops {
    className?: string
    // title: string
    // onClick: () => void
}

const ProductCard = ({className}: Iprops) => {
    return (
        <>
        <div className={cn("w-full rounded-md overflow-hidden hover:cursor-pointer shadow-md", className)}>
            <div className="w-full h-[300px] relative">
                <Image src={"/images/categories-img.png"} alt="hero" sizes="100vw" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="py-6 px-4 bg-[#F4F5F7] space-y-1">
                <h4 className="font-bold text-[18px]">Syltherine</h4>
                <p className="text-[14px] text-[#898989]">Stylish cafe chair</p>
                <div className="flex justify-between">
                    <p className="font-semibold text-furniro-primary">Rp. 2.500.000</p>
                    <p className="line-through text-[#898989]">Rp. 3.500.000</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard
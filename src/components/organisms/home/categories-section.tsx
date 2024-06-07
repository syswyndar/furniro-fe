"use client"

import CategoriesCard from "@/components/molecules/card/categories-card";
import { useRouter } from "next/navigation";

const CategoriesSection = () => {
    const router = useRouter()

    return (
        <>
        <div className="container py-[100px] space-y-16">
            <div className="text-center space-y-2">
                <h1 className="text-[28px] md:text-[40px] font-bold">Browse The Range</h1>
                <p className="text-furniro-description text-[16px] md:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <CategoriesCard title="Dining" onClick={() => router.push("/")}/>
                <CategoriesCard title="Living" onClick={() => router.push("/")}/>
                <CategoriesCard title="Bedroom" onClick={() => router.push("/")}/>
            </div>
        </div>
        </>
    )
}

export default CategoriesSection;
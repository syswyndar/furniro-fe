'use client'

import ProductCard from "@/components/molecules/card/product-card"

const ProductSection = () => {
    return (
        <>
        <div className="container pb-[100px] space-y-16">
            <div className="text-center space-y-2">
                <h1 className="text-[28px] md:text-[40px] font-bold">Our Products</h1>
            </div>
            <div className="grid grid-cols-4 gap-10">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className="text-center">
                <button className="px-[80px] py-[12px] border border-furniro-primary rounded-[6px] font-bold text-furniro-primary shadow-md">Show More</button>
            </div>
        </div>
        </>
    )
}

export default ProductSection
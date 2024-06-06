import { HeroComponent } from "../organisms/home/hero-component"

const HomePage = () => {
    return (
        <div className="relative w-full h-full">
            <HeroComponent/>
            <div className="absolute top-0 left-0 z-10 pt-20 w-full h-full">
                <div className="container mx-auto w-full h-full py-6 flex justify-end items-center">
                    {/* <div></div> */}
                    <div className='bg-[#FFF3E3] p-[41px] w-[643px] rounded-md space-y-[40px]'>
                        <div className="">
                            <h4 className="font-semibold text-[14px] mb-2 md:mb-0">New Arrival</h4>
                            <h1 className="text-[32px] md:text-[53px] font-extrabold text-furniro-primary leading-tight">Discover Our Collection</h1>
                            <p className="mt-5 text-[14px] md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        </div>
                        <div>
                            <button className="px-[52px] py-[16px] md:py-[25px] md:px-[72px] bg-furniro-primary text-white rounded-sm font-bold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
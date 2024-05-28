import { HeroComponent } from "../organisms/home/hero-component"

const HomePage = () => {
    return (
        <div className="relative w-full h-full">
            <HeroComponent/>
            <div className="absolute top-0 left-0 z-10 pt-20 w-full">
                <div className="container mx-auto w-full py-6">
                    <p>ASu</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
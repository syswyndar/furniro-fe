import CategoriesSection from "../organisms/home/categories-section"
import { HeroComponent } from "../organisms/home/hero-component"
import InspirationSection from "../organisms/home/inspiration-section"
import ProductSection from "../organisms/home/product-section"
import { Button } from "../ui/button"

const HomePage = () => {
    return (
        <div className="relative w-full h-full">
            <HeroComponent/>
            <CategoriesSection/>
            <ProductSection/>
            <InspirationSection/>
        </div>
    )
}

export default HomePage
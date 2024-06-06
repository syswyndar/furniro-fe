'use client'

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


const NavbarUnLoginAction = () => {
    return (
        <>
            <div className="gap-4 hidden md:flex">
                <Button variant={"outline"} className="hover:bg-furniro-primary hover:text-white bg-furniro-primary text-white shadow-none border-none font-semibold">Login</Button>
                <Button variant={"outline"} className="hover:bg-furniro-primary hover:text-white bg-furniro-primary text-white shadow-none border-none font-semibold">Register</Button>
            </div>
            <div className="flex justify-center items-center md:hidden">
                <Menu/>
            </div>
        </>
    )
}

export default NavbarUnLoginAction;
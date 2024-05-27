'use client'

import { Button } from "@/components/ui/button";


const NavbarLoginAction = () => {
    return (
        <div className="flex gap-4">
            <Button variant={"outline"}>Login</Button>
            <Button variant={"outline"}>Register</Button>
        </div>
    )
}

export default NavbarLoginAction;
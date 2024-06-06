'use client'

import { NavLinkItems } from "@/constant/nav-link-item"
import { NavLinkType } from "@/types/nav-link-type"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavbarLoginAction from "../molecules/navbar/navbar-login-action"
import NavbarUnLoginAction from "../molecules/navbar/navbar-unlogin-action"

export const NavbarComponent = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    return (
        <nav className="fixed w-full border-b shadow-sm z-20 bg-white">
            <div className="flex justify-between items-center w-full py-6 container">
                <div className="flex items-center">
                    <Image src={"/images/logo.png"} width={130} height={30} alt="logo"/>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-[30px] lg:gap-[75px] font-medium">
                        {NavLinkItems.map((item: NavLinkType, idx: number) => {
                            return (
                                <li key={idx} className="hover:text-furniro-primary font-semibold">
                                    <Link href={item.link_url}>{item.menu_title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    {isLogin ? <NavbarLoginAction/> : <NavbarUnLoginAction/>}
                </div>
            </div>
        </nav>
    )
}
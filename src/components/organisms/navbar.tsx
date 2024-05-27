'use client'

import { NavLinkItems } from "@/constant/nav-link-item"
import { NavLinkType } from "@/types/nav-link-type"
import Image from "next/image"
import Link from "next/link"

export const NavbarComponent = () => {
    return (
        <nav className="fixed w-full border-b shadow-sm">
            <div className="flex justify-between items-center w-full py-6 container mx-auto">
                <div className="flex items-center">
                    <Image src={"/images/logo.png"} width={130} height={30} alt="logo"/>
                </div>
                <div>
                    <ul className="flex items-center gap-[75px] font-medium">
                        {NavLinkItems.map((item: NavLinkType, idx: number) => {
                            return (
                                <li key={idx}>
                                    <Link href={item.link_url}>{item.menu_title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <p>Action</p>
                </div>
            </div>
        </nav>
    )
}
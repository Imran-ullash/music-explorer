"use client";
import React, { useState } from "react";
import {  Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <Link href={'/courses'}><MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <Link href={'#'}> <ProductItem
                            title="All Courses"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Get all courses to click this"
                        /></Link>
                        <Link href={'#'}><ProductItem
                            title="Basic Music Theory"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Learn Basic Music theory"
                        /></Link>
                        <Link href={'#'}><ProductItem
                            title="Song Writing"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Go creative with song writing"
                        /></Link>
                        <Link href={'#'}><ProductItem
                            title="Music Production"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Earn with music production"
                        /></Link>
                    </div>
                </MenuItem></Link>
                <Link href={'/contact'}><MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem></Link>
            </Menu>
        </div>
    );

};

export default Navbar;
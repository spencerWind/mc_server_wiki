"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Importing hooks
import useWindowSize from "../hooks/useWindowSize";

// Importing assets
import mobileNavIconOpen from "../assets/icons8-menu.svg";
import mobileNavIconClose from "../assets/icons8-close.svg";


const Navigation = () => {
    const [open, setOpen] = useState(false);
    const size = useWindowSize();

    return (
        <>
        {/* Check screen width to determine navigation type */}
            {size.width && size.width > 768 ? (
                // Desktop Navigation
                <nav className="h-16 flex items-center justify-between bg-slate-900">
                    <h1 className="font-black text-xl">
                        <Link href={"/"}>Server Wiki</Link>
                    </h1>
                    <ul className="flex gap-16">
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/builds"}>Builds</Link>
                        </li>
                        <li>
                            <Link href={"/maps"}>Maps</Link>
                        </li>
                        <li>
                            <Link href={"/lore"}>Lore</Link>
                        </li>
                    </ul>
                    {/* Setting background color of desktop navigation to escape 1440px bounding box */}
                    <span className="absolute h-16 left-0 w-screen -z-10 bg-slate-900" />
                </nav>
            ) : (
                // Mobile Navigation
                <>
                    <nav className="h-16 flex items-center justify-between bg-slate-900 px-4">
                        <h1 className="font-black">
                            <Link href={"/"}>Server Wiki</Link>
                        </h1>
                        {/* Open mobile menu */}
                        <button
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="h-12 w-12 flex items-center justify-center">
                            <Image
                                src={mobileNavIconOpen}
                                alt="Nav Menu"
                            />
                        </button>
                    </nav>
                    {open ? (
                        // Opened mobile menu
                        <div
                            id="mobileNavMenu"
                            className="h-screen w-2/3 fixed top-0 right-0 z-10 bg-slate-900 ">
                            <section className="h-16 flex items-center justify-end px-4">
                                <button
                                    onClick={() => {
                                        setOpen(!setOpen);
                                    }}
                                    className="h-12 w-12 flex items-center justify-center">
                                    <Image
                                        src={mobileNavIconClose}
                                        alt="Nav Menu"
                                    />
                                </button>
                            </section>
                            <ul className="flex flex-col gap-16 items-center py-12">
                                <li>
                                    <Link href={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/builds"}>Builds</Link>
                                </li>
                                <li>
                                    <Link href={"/maps"}>Maps</Link>
                                </li>
                                <li>
                                    <Link href={"/lore"}>Lore</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // Returns nothing if menu is closed
                        ""
                    )}
                </>
            )}
        </>
    );
};

export default Navigation;

"use client";
import { iconPack } from "@/assets/icons";
import { useSession } from "next-auth/react";
import Image from "next/image"
import { redirect } from "next/navigation";
import { useSidebarClient } from "./SidebarClient";
import { Menu } from 'lucide-react';
import { useLayoutEffect, useState } from "react";
import SidebarMobile from "../SidebarMobile";
// import SidebarMobile from "../SidebarMobile";

function Header() {
    const { data: session } = useSession();
    const { lastPart } = useSidebarClient();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    if (!session) {
        redirect("/")
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#f5f5f5";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [])


    return (
        <div className="flex justify-end relative">
            {
                isSidebarOpen && <SidebarMobile openHandler={(val: boolean) => setIsSidebarOpen(val)} />
            }

            <header className="h-26 w-full flex items-center">
                <Menu size={24} className="ml-4 header_hamberger" onClick={() => setIsSidebarOpen(true)} />
                <div className="header_title flex-1 font-semibold ml-4">

                    {lastPart?.toUpperCase()}
                </div>
                <div className="flex justify-end items-center p-4 gap-4">
                    <Image src={iconPack.bell} width={20} height={20} alt="notifications" />
                    {
                        session && session.user && session.user.image ? (
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                alt={session.user.name || "user image"}
                                className="rounded-full"
                            />
                        ) : (
                            <Image src="/images/avatar.png" width={40} height={40} alt="avatar" />
                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default Header

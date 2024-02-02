"use client";
import { iconPack } from "@/assets/icons"
import { sidebarData } from "@/data/sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useSidebarClient } from "./client/SidebarClient";
import SignOut from "./client/SignOut";
import { X } from 'lucide-react';


function Siedbar({ openHandler }: { openHandler: (val: boolean) => void }) {
  const { lastPart } = useSidebarClient();
  return (
    <div className="sidebar_container">
      <div className="sidebar_header">
        <Image src={iconPack.subtract} alt={"sidebar header"} width={35} height={35} />
        <span>BASE</span>
        <X size={22} className="sidebar_corss ms-auto me-4" onClick={() => openHandler(false)} />
      </div>
      <div className="sidebar_links_container">
        {
          sidebarData.map((item) => {
            return (
              <Link href={item.link} className={`sidebar_item_wapper ${lastPart === item.name?.toLowerCase() ? "active" : ""}`} key={item.id}>
                <Image src={item.icon} alt={item.name} width={22} height={22} />
                <span>{item.name}</span>
              </Link>
            )
          })
        }
      </div>
      <SignOut />
    </div>
  )
}

export default Siedbar

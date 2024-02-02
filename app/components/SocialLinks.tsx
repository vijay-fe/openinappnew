import { footerLinkIcons } from "@/assets/icons"
import Image from "next/image"
import React from 'react'

function SocialLinks() {
    return (
        <div className="flex items-center justify-evenly w-auto">
            {footerLinkIcons.map((icon, index) => (<Image src={icon} key={index} alt="icon" width={50} height={50} className="cursor-pointer footer_links_mobile" objectFit="fill" />))}
        </div>
    )
}

export default SocialLinks

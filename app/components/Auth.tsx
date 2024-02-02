import { footerLinkIcons } from "@/assets/icons";
import Image from "next/image";
import SignIn from "./SignIn";
import logo from "@/logo.svg";
function Auth() {
    return (
        <div className="base_container">
            <div className="base_header">
                <Image src={logo} alt="logo" width={50} height={50} />
                <div className="base_header_title">
                    BASE
                </div>
            </div>
            <div className="left_side_content flex-1 flex flex-col">
                <div className="left_side_content_inner flex-1">
                    <div className="top_section">
                        <Image src={logo} alt="logo" width={50} height={50} />
                    </div>
                    <div className="middle_section base_title text-center">
                        BASE
                    </div>
                    <div className="bottom_section flex items-center justify-evenly w-auto">
                        {footerLinkIcons.map((icon, index) => (<Image src={icon} key={index} alt="icon" width={50} height={50} className="cursor-pointer footer_link_icon" objectFit="fill" />))}
                    </div>
                </div>
            </div>
            <div className="right_side flex-1">
                <SignIn />
            </div>
        </div>
    )
}

export default Auth

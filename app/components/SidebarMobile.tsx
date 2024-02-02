import React from 'react'
import Siedbar from "./Sidebar"

function SidebarMobile({ openHandler }: { openHandler: (val: boolean) => void }) {
    return (
        <div className="sidebar_mobile_container">
            <Siedbar openHandler={openHandler} />
        </div>
    )
}

export default SidebarMobile

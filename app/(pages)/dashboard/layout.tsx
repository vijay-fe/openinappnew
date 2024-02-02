import Siedbar from "@/app/components/Sidebar"
import Header from "@/app/components/client/Header"

function layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="dashboard_layout_container relative">
            <div className="dashboard_layout_sidebar">
                {/* @ts-ignore */}
                <Siedbar />
            </div>
            <div className="dashboard_layout_main">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout

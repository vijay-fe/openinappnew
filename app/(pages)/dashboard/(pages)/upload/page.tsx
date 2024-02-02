import UploadsTable from "@/app/components/UploadsTable"
import Dropzone from "@/app/components/client/Dropzone"

function page() {
    return (
        <div className="dashboard_pages_container">
            <Dropzone />
            <UploadsTable />
        </div>
    )
}

export default page

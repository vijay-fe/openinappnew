import data from "@/data/tableData.json";
import { X } from 'lucide-react';
function UploadsTable() {
    return (
        <div className="upload_table_container">
            <div className="title">
                Uploads
            </div>
            <div className="uploads_table">
                <table>
                    <thead>
                        <tr>
                            <th>SI No.</th>
                            <th>Links</th>
                            <th>Prefix</th>
                            <th>Add Tags</th>
                            <th>Selected tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td className="text-blue-500 underline">{item.links}</td>
                                        <td>{item.prefix}</td>
                                        <td>
                                            <select className="custom_ddl">
                                                {

                                                    item["select tags"].map((tag, index) => {
                                                        return (
                                                            <option key={index}>{tag}</option>
                                                        )
                                                    })

                                                }
                                            </select>
                                        </td>
                                        <td className="flex h-[60px] items-center justify-center">
                                            {
                                                item["select tags"].slice(0, 2)
                                                    .map((tag, index) => (
                                                        <span className="selected_tags_chip" key={index}>
                                                            {tag} <X />
                                                        </span>
                                                    ))
                                            }

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UploadsTable

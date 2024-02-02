"use client";
import { createRef, useRef, useState } from 'react';
import { iconPack } from "@/assets/icons";
import Image from "next/image";
import { Upload } from 'lucide-react';
function Dropzone() {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            handleFiles(files);
        }
    };

    const handleFiles = (files: FileList) => {
        const selectedFile = files[0];
        if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            selectedFile.type === 'application/vnd.ms-excel') {
            setSelectedFileName(selectedFile.name);
            console.log("Selected or dropped file:", selectedFile);
        } else {
            alert("Please select a valid Excel file (.xlsx or .xls)");
        }
        // setSelectedFileName(selectedFile.name);
        // console.log("Selected or dropped files:", files);
    };

    async function handleUpload() {

    }


    return (
        <div className={`dropzone_container ${isDragging ? 'dragging' : ''}`}>
            <div
                className="dropzone_area"
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
            >
                <Image src={iconPack.excel} alt="dropzone" width={35} height={35} />
                {
                    selectedFileName ?
                        <p>{selectedFileName}</p>
                        :
                        <p>Drop your Excel sheet here or <span>browse</span></p>
                }
            </div>
            <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                ref={inputRef || createRef<HTMLInputElement>()}
                accept=".xlsx, .xls"
            />
            <button className="dropzone_button" onClick={() => handleUpload()}>
                <Upload />
                Upload
            </button>
        </div>
    );
}

export default Dropzone;

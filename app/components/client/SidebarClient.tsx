"use client";
import { usePathname } from 'next/navigation';

export const useSidebarClient = () => {
    const path = usePathname();
    const lastPart = path.split("/").pop() || "";

    return {
        lastPart,
    };
};

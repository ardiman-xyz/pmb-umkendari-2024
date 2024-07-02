
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import {AlertCircle} from "lucide-react";
import React from "react";

interface HeadingInfoProps {
    title: string;
    children: React.ReactNode
}

export const HeadingInfo = ({title, children}: HeadingInfoProps) => {
    return (
        <div className="flex items-center gap-x-3">
            <h2 className="font-semibold text-xl text-gray-700">{title}</h2>
            <Popover>
                <PopoverTrigger>
                    <AlertCircle className="h-5 w-5 cursor-pointer text-gray-800" />
                </PopoverTrigger>
                <PopoverContent>
                    {children}
                </PopoverContent>
            </Popover>
        </div>
    )
}

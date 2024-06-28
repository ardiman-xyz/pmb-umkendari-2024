import React from "react";
import { Toaster } from "@/Components/ui/sonner";
import Sidebar from "@/Components/Sidebar";

type IProps = {
    children: React.ReactNode;
    breadCrumbs?:
        | {
              title: string;
              url: string;
              disabled?: boolean;
              params?: Object;
          }[]
        | undefined;
};

export default function Authenticated({ children, breadCrumbs }: IProps) {
    return (
        <div className="min-h-screen font-inter bg-white">
            <Toaster richColors />
            <div className="flex h-full w-[234px] flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-[234px] h-full pt-4 container mx-auto max-w-screen-2xl">
                {children}
            </main>
        </div>
    );
}

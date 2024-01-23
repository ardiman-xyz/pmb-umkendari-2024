import { PropsWithChildren } from "react";
import Navbar from "@/Components/guest/Navbar";
import { MessagesSquare } from "lucide-react";
import { Hint } from "@/Components/Hint";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-full bg-gray-100 font-inter">
            <Navbar />

            <main>{children}</main>

            <div
                title="Hubungi kami"
                className="fixed bottom-5 right-5 p-4 rounded-full border border-green-800 bg-green-100 cursor-pointer z-50 shadow-lg "
            >
                <MessagesSquare className="stroke-green-700" />
            </div>
        </div>
    );
}

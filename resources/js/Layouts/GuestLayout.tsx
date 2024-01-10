import { PropsWithChildren } from 'react';
import Navbar from "@/Components/guest/Navbar";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-full bg-gray-100 font-inter">
           <Navbar />

            <main>
                {children}
            </main>

        </div>
    );
}

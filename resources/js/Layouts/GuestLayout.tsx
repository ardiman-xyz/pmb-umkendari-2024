import { PropsWithChildren } from "react";
import Navbar from "@/Components/guest/Navbar";
import Footer from "@/Pages/Guest/_components/footer";
import MessageBox from "@/Components/MessageBox";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-full bg-white font-inter">
            <Navbar />

            <main>{children}</main>

            <MessageBox />

            <section className="mt-10">
                <Footer />
            </section>
        </div>
    );
}

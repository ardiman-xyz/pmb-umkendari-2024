import { PropsWithChildren } from "react";
import Navbar from "@/Components/guest/Navbar";
import { MessagesSquare } from "lucide-react";
import Footer from "@/Pages/Guest/_components/footer";

export default function Guest({ children }: PropsWithChildren) {
    const handleClickShareWa = () => {
        let messageDone = `Assalamu'alaikum warahmatullahi wabarokatuh.`;
        const hotlineNumber = "+6282249910033";

        let url = `https://wa.me/${hotlineNumber}?text=${messageDone}`;

        window.open(url);
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 font-inter">
            <Navbar />

            <main>{children}</main>

            <div
                onClick={handleClickShareWa}
                title="Hubungi kami"
                className="fixed bottom-5 right-5 p-4 rounded-full border border-green-800 bg-green-100 cursor-pointer z-50 shadow-lg "
            >
                <MessagesSquare className="stroke-green-700" />
            </div>
            <section className="mt-10">
                <Footer />
            </section>
        </div>
    );
}

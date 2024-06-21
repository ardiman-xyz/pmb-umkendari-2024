import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { router } from "@inertiajs/react";
import { Button } from "../ui/button";

export const NavbarMobile = () => {
    const handleRedirect = (programs: string) => {
        return router.get(route(programs));
    };

    const handleClickShareWa = () => {
        let messageDone = `Assalamu'alaikum warahmatullahi wabarokatuh.`;
        const hotlineNumber = "+6282249910033";

        let url = `https://wa.me/${hotlineNumber}?text=${messageDone}`;

        window.open(url);
    };

    const handleRedirect1 = () => {
        window.open("https://daftar.umkendari.ac.id/", "_blank");
    };

    return (
        <div className="md:hidden flex">
            <div className="flex items-center ml-10">
                <Button
                    variant="guestButtonDefault"
                    size="lg"
                    onClick={handleRedirect1}
                >
                    Daftar
                </Button>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <div className="p-2 rounded-full cursor-pointer hover:bg-red-800 group transition-colors">
                        <Menu className="group-hover:text-white transition-colors" />
                    </div>
                </SheetTrigger>
                <SheetContent className="">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <ul className="mt-10 flex flex-col gap-y-4">
                        <li className="font-bold flex items-center justify-between">
                            <a
                                href="https://umkendari.ac.id/about"
                                target="_blank"
                            >
                                PROFIL
                            </a>
                        </li>

                        <li className="font-bold ">
                            <p>ADMISI</p>
                            <ul className="flex flex-col justify-between text-sm pl-5 text-gray-700">
                                <li
                                    className="py-2 cursor-pointer"
                                    onClick={() =>
                                        handleRedirect("pathways.index")
                                    }
                                >
                                    Persyaratan
                                </li>
                                <li
                                    onClick={() =>
                                        handleRedirect("tuition.index")
                                    }
                                    className="py-2 cursor-pointer"
                                >
                                    Biaya pendidikan
                                </li>
                                <li
                                    className="py-2 cursor-pointer"
                                    onClick={() => handleRedirect("flow.index")}
                                >
                                    Alur pendaftaran
                                </li>
                            </ul>
                        </li>
                        <li
                            onClick={() => handleRedirect("pathways.index")}
                            className="font-bold flex items-center justify-between cursor-pointer"
                        >
                            <span>JALUR MASUK</span>
                        </li>
                        <li
                            onClick={handleClickShareWa}
                            className="font-bold flex items-center justify-between cursor-pointer"
                        >
                            <span>FAQ</span>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
};

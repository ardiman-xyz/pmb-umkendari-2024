import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { router } from "@inertiajs/react";

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

    return (
        <div className="md:hidden flex">
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
                                href="https://umkendari.ac.id/tentang-umk"
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
                                <li className="py-2 cursor-pointer">
                                    Alur pendaftaran
                                </li>
                            </ul>
                        </li>
                        <li
                            onClick={() => handleRedirect("pathways.index")}
                            className="font-bold flex items-center justify-between cursor-pointer"
                        >
                            <span>BEASISWA</span>
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

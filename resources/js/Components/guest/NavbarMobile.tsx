import {ChevronDown, ChevronRight, Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/Components/ui/sheet";

export const NavbarMobile = () => {
    return (
        <div className="md:hidden flex">
            <Sheet>
                <SheetTrigger asChild>
                    <div className="p-2 rounded-full cursor-pointer hover:bg-red-800 group transition-colors">
                        <Menu className="group-hover:text-white transition-colors"/>
                    </div>
                </SheetTrigger>
                <SheetContent className="">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <ul className="mt-10 flex flex-col gap-y-4">
                        <li className="font-bold flex items-center justify-between">
                            <span>
                                ADMISI
                            </span>
                            <ChevronRight/>
                        </li>
                        <li className="font-bold flex items-center justify-between">
                            <span>
                                BEASISWA
                            </span>
                        </li>
                        <li className="font-bold flex items-center justify-between">
                            <span>
                                FAQ
                            </span>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}

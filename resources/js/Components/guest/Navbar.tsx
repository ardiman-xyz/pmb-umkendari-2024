import ApplicationLogo from "@/Components/ApplicationLogo";
import {NavbarRoutes} from "@/Components/guest/NavbarRoutes";
import {Button} from "@/Components/ui/button";
import {Menu} from "lucide-react";
import {NavbarMobile} from "@/Components/guest/NavbarMobile";

const Navbar = () => {
    return (
        <div className="w-full h-[84px] bg-white ">
            <div className="w-full h-full flex container max-w-screen-2xl items-center ">
               <div className="flex justify-between items-center w-full">
                   <div className="flex flex-row items-center">
                       <ApplicationLogo />
                       <NavbarRoutes />
                   </div>
                   <div className="items-center gap-x-3 hidden md:flex">
                       <Button variant="guestButtonOutline" size="xl" className="font-bold hover:bg-red-800 hover:text-white transition-colors">
                           LOGIN
                       </Button>
                      <Button variant="guestButtonDefault" size="xl" className="font-bold">
                          DAFTAR
                      </Button>
                   </div>
                  <NavbarMobile />
               </div>
            </div>
        </div>
    )
}

export default Navbar;

import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";
import { SidebarBottom } from "@/Components/SidebarBottom";

const Sidebar = () => {
    return (
        <div className="h-full border-r border-gray-100 flex flex-col overflow-y-auto bg-blue-1">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full h-full justify-between overflow-y-auto relative">
                <SidebarRoutes />
                <SidebarBottom />
            </div>
        </div>
    );
};

export default Sidebar;

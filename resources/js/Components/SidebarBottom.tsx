import { SharedInertiaData } from "@/types/inertia";
import { usePage } from "@inertiajs/react";
import {
    Image,
    InfoIcon,
    Layout,
    LogOut,
    UserCircle,
    Users,
} from "lucide-react";
import SidebarItem from "@/Components/SiderbarItem";

export const SidebarBottom = () => {
    const { auth } = usePage<SharedInertiaData>().props;

    const Routes = [
        {
            icon: InfoIcon,
            label: "Informasi",
            href: "/information",
            requiredRoles: ["Admin"],
        },
        {
            icon: UserCircle,
            label: "user",
            href: "/users",
        },
        {
            icon: LogOut,
            label: "Keluar",
            href: "/logout",
            requiredRoles: ["Admin"],
        },
    ];

    return (
        <div className="flex flex-col w-full pb-10">
            {Routes.map(
                (route, index) =>
                    (!route.requiredRoles ||
                        (auth &&
                            route.requiredRoles.some(
                                (role) => auth.user && auth.roles.includes(role)
                            ))) && (
                        <SidebarItem
                            key={index}
                            icon={route.icon}
                            href={route.href}
                            label={route.label}
                            requiredRoles={route.requiredRoles}
                        />
                    )
            )}
        </div>
    );
};

import { SharedInertiaData } from "@/types/inertia";
import { usePage } from "@inertiajs/react";
import { Copyright, InfoIcon, LogOut, UserCircle } from "lucide-react";
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
        <div>
            <div className="flex flex-col w-full pb-5">
                {Routes.map(
                    (route, index) =>
                        (!route.requiredRoles ||
                            (auth &&
                                route.requiredRoles.some(
                                    (role) =>
                                        auth.user && auth.roles.includes(role)
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
            <div className="px-6 pb-2 flex items-center gap-x-1">
                <Copyright className="w-3 h-3 text-white" />
                <p className="text-xs text-white">
                    admisi.umkendari.ac.id, inc.
                </p>
            </div>
        </div>
    );
};

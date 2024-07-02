import { SharedInertiaData } from "@/types/inertia";
import { usePage } from "@inertiajs/react";
import {Dot, Layers, Layout, Megaphone, SchoolIcon} from "lucide-react";
import SidebarItem from "@/Components/SiderbarItem";

const Routes = [
    {
        icon: Layout,
        label: "Dasbor",
        href: "/dashboard",
        requiredRoles: ["Admin"],
    },
    {
        icon: Layers,
        label: "Slider",
        href: "/slider",
        requiredRoles: ["Admin"],
    },
    {
        icon: SchoolIcon,
        label: "Profil",
        href: "/profiles",
        requiredRoles: ["Admin"],
        children: [
            {
                icon: Dot,
                label: "Fasilitas",
                href: "/profile/facilities",
                requiredRoles: ["Admin"],
            },
            {
                icon: Dot,
                label: "Prestasi",
                href: "/profile/achievements",
                requiredRoles: ["Admin"],
            },
        ]
    },
    {
        icon: Megaphone ,
        label: "Admisi",
        href: "#",
        requiredRoles: ["Admin"],
        children: [
            {
                icon: Dot,
                label: "Fakultas",
                href: "/admission/faculty",
                requiredRoles: ["Admin"],
            },
            {
                icon: Dot,
                label: "Informasi",
                href: "/admission/information",
                requiredRoles: ["Admin"],
            },
        ]
    },
];

const SidebarRoutes = () => {
    const { auth } = usePage<SharedInertiaData>().props;

    return (
        <div className="flex flex-col w-full">
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
                            children={route.children}
                        />
                    )
            )}
        </div>
    );
};

export default SidebarRoutes;

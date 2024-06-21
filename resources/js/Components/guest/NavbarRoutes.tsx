import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/Components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Link, router } from "@inertiajs/react";

export const NavbarRoutes = () => {
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
        <NavigationMenu className="pl-10 md:block hidden">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="https://umkendari.ac.id/about" target="_blank">
                        <NavigationMenuLink className="font-bold">
                            PROFIL
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold text-md">
                        ADMISI
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem
                                onClick={() => handleRedirect("pathways.index")}
                                title="Persyaratan"
                            >
                                Informasi mengenai persyaratan umum dan khusus
                                yang diperlukan untuk mendaftar.
                            </ListItem>

                            <ListItem
                                title="Alur pendaftaran"
                                onClick={() => handleRedirect("flow.index")}
                            >
                                Penjelasan lengkap mengenai tahapan dan proses
                                pendaftaran calon mahasiswa baru.
                            </ListItem>

                            <ListItem
                                title="Biaya pendidikan"
                                onClick={() => handleRedirect("tuition.index")}
                            >
                                Daftar rinci biaya kuliah, SPP, dan biaya-biaya
                                lain yang harus dibayarkan oleh mahasiswa.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={route("pathways.index")}>
                        <NavigationMenuLink className="font-bold">
                            JALUR MASUK
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="pl-6">
                    <NavigationMenuLink
                        onClick={handleClickShareWa}
                        className="font-bold cursor-pointer"
                    >
                        FAQ
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

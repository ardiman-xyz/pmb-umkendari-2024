import { router } from "@inertiajs/react";

export default function ApplicationLogo() {
    const handleRedirect = () => {
        return router.get(route("home"));
    };

    return (
        <div className="cursor-pointer" onClick={handleRedirect}>
            <img
                src="/svg/logo.svg"
                alt="Logo"
                className="md:w-[300px] w-[200px]"
            />
        </div>
    );
}

import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Jumbotron from "./_components/jumbotron";
import Programs from "./_components/programs";
import Facility from "./_components/facility";
import Achievements from "./_components/achievements";
import Procedure from "./_components/procedure";
import Footer from "./_components/footer";

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <Guest>
                <div>
                    <Jumbotron />
                    <section className="mt-10 container mx-auto">
                        <Programs />
                    </section>
                    <section className="mt-[114px] container mx-auto">
                        <Facility />
                    </section>

                    <section className="mt-[200px] ">
                        <Achievements />
                    </section>

                    <section className="mt-[100px] container mx-auto">
                        <Procedure />
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
            </Guest>
        </>
    );
}

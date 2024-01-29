import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Jumbotron from "./_components/jumbotron";
import Programs from "./_components/programs";
import Facility from "./_components/facility";
import Achievements from "./_components/achievements";
import Procedure from "./_components/procedure";

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head>
                <title>Selamat datang</title>
                <meta
                    head-key="description"
                    name="description"
                    content="This is a page specific description"
                />
            </Head>
            <Guest>
                <div>
                    <Jumbotron />
                    <section className="mt-10 container mx-auto">
                        <Programs />
                    </section>
                    <section className="md:mt-[114px] mt-6 container mx-auto">
                        <Facility />
                    </section>

                    <section className="md:mt-[200px] mt-6">
                        <Achievements />
                    </section>

                    <section className="mt-[100px] container mx-auto">
                        <Procedure />
                    </section>
                </div>
            </Guest>
        </>
    );
}

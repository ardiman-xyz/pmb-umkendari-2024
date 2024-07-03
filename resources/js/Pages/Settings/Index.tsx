import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Heading} from "@/Components/Heading";
import {Head} from "@inertiajs/react";
import {Separator} from "@/Components/ui/separator";
import {AccountSetting} from "./_components/AccountSetting";

const SettingPage = () => {
    return (
        <Authenticated>
            <Head title="Pengaturan" />
            <div className="">
                <div className="mt-10 mb-20">
                    <AccountSetting />
                </div>
            </div>
        </Authenticated>
    )
}

export default SettingPage;

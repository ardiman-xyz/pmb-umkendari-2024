import { Separator } from "@/Components/ui/separator";
import {PersonalInfo} from "@/Pages/Settings/_components/PersonalInfo";
import {PasswordForm} from "@/Pages/Settings/_components/PasswordForm";

export const AccountSetting = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-y-0 gap-y-10">
                <div>
                    <PersonalInfo />
                    <Separator className="my-10" />
                    <PasswordForm />
                </div>
                <div>
                    {/*<AvatarForm />*/}
                </div>
            </div>
        </>
    );
};

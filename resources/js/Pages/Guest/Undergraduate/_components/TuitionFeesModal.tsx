import Modal from "@/Components/Modal";
import {Department} from "@/types";
import {Heading} from "@/Components/Heading";
import currency from "@/Helpers/currency";
import {usePage} from "@inertiajs/react";
import {SharedInertiaData} from "@/types/inertia";

interface Props {
    onOpen: boolean;
    onClose: () => void;
    data: Department
}

export const TuitionFeesModal = ({onOpen, onClose, data}: Props) => {

    const {ziggy} = usePage<SharedInertiaData>().props;

    return (
        <Modal
            show={onOpen}
            onClose={onClose}
            maxWidth="6xl"
        >
            <div className="p-4">
                <Heading
                    title={data.name}
                    description={`Detail biaya pendidikan program studi ${data.name}`}
                />
                <table className="w-full overflow-x-scroll  text-sm leading-normal mt-6">
                    <thead>
                    <tr>
                        <th
                            className="px-4 py-2  border border-zinc-300 text-center"
                            rowSpan={2}
                        >
                            Registrasi
                        </th>
                        <th
                            className="px-4 py-2 border border-zinc-300 text-center"
                            rowSpan={2}
                        >
                            Orientasi
                        </th>
                        <th
                            className="px-4 py-2 border border-zinc-300 text-center"
                            rowSpan={2}
                        >
                            BPP (Setiap semester)
                        </th>
                        <th
                            colSpan={3}
                            className="px-4 py-2 border border-zinc-300 text-center"
                        >
                            BPS (Diangsur dalam 3 semester)
                        </th>
                    </tr>
                    <tr>
                        <th className="px-4 py-2 border border-zinc-300 text-center">
                            Smt. 1
                        </th>
                        <th className="px-4 py-2 border border-zinc-300 text-center">
                            Smt. 2
                        </th>
                        <th className="px-4 py-2 border border-zinc-300 text-center">
                            Smt. 3
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                {currency(
                                    data.tuition_fees.registration_fee
                                )}
                            </td>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                {currency(
                                    data.tuition_fees.orientation_fee
                                )}
                            </td>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                {currency(
                                    data.tuition_fees.tuition_fee_per_semester
                                )}
                            </td>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                {currency(
                                    Number(
                                        data.tuition_fees.bps_semester_1
                                    )
                                )}
                            </td>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                {currency(
                                    Number(
                                        data.tuition_fees.bps_semester_2
                                    )
                                )}
                            </td>
                            <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                {currency(
                                    Number(
                                        data.tuition_fees.bps_semester_3
                                    )
                                )}
                            </td>
                    </tr>
                    </tbody>
                </table>

                <div className="mt-10 mb-5">
                    <a href={ziggy?.url + "/biaya-pendidikan"} className="px-6 py-3 text-sm text-white rounded cursor-pointer bg-[#991B1B]">
                        Lihat semua biaya fakultas pendidikan dan program studi
                    </a>
                </div>
            </div>
        </Modal>
    )
}

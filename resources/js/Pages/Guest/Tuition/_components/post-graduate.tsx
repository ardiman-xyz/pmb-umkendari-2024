import postgraduate from "@/data/postgraduate-fee.json";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

import currency from "@/Helpers/currency.js";
import { Button } from "@/Components/ui/button";
import { Download } from "lucide-react";

import {Undergraduate as UndergraduateType} from "@/types";

interface UndergraduateProps {
    data: UndergraduateType[]
}

const PostGraduate = ({data}: UndergraduateProps) => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/file/payment_pasca.xlsx";
        link.download = "payment_pasca.xlsx";
        link.click();
    };

    return (
        <div>
            <h2 className="md:text-3xl text-xl font-bold mb-6 capitalize">
                Biaya pendidikan magister (pascasarjana)
            </h2>

            <div className="w-full mx-auto  overflow-x-auto">
                {data.map((faculty, index) => (
                    faculty.pascasarjana_departments && Object.keys(faculty.pascasarjana_departments).length > 0  ? (
                        <Accordion
                            type="single"
                            collapsible
                            key={index}
                            className="border-x-[1px] border-y-[0.5px] border-zinc-300 px-4"
                        >
                            <AccordionItem value={`item-${index + 1}`}>
                                <AccordionTrigger className="capitalize">Fakultas {faculty.name}</AccordionTrigger>
                                <AccordionContent className="overflow-x-auto">
                                    <table className="w-full overflow-x-scroll  text-sm leading-normal ">
                                        <thead>
                                        <tr>
                                            <th
                                                className="px-4 py-2 text-left border border-zinc-300"
                                                rowSpan={2}
                                            >
                                                Program studi
                                            </th>
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
                                        {faculty.pascasarjana_departments.map(
                                            (program, key) => (
                                                <tr key={key}>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm">
                                                        {program.name}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                                        {currency(
                                                            program.tuition_fees.registration_fee
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                                        {currency(
                                                            program.tuition_fees.orientation_fee
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[140px]">
                                                        {currency(
                                                            program.tuition_fees.tuition_fee_per_semester
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                                        {currency(
                                                            Number(
                                                                program.tuition_fees.bps_semester_1
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                                        {currency(
                                                            Number(
                                                                program.tuition_fees.bps_semester_2
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-sm w-[120px]">
                                                        {currency(
                                                            Number(
                                                                program.tuition_fees.bps_semester_3
                                                            )
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                        </tbody>
                                    </table>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ) : null

                ))}
            </div>

            <hr />
            <div className="mt-4">
                <Button variant="guestButtonDefault" onClick={handleDownload}>
                    Unduh template biaya magister
                    <Download className="h-4 w-4 ml-3" />
                </Button>
            </div>
        </div>
    );
};

export default PostGraduate;

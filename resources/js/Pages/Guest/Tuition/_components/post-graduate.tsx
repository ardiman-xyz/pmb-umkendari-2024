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

const PostGraduate = () => {
    const { faculties } = postgraduate;

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
                {faculties.map((faculty, index) => (
                    <Accordion
                        type="single"
                        collapsible
                        key={index}
                        className="border-x-[1px] border-y-[0.5px] border-zinc-300 px-4"
                    >
                        <AccordionItem value={`item-${index + 1}`}>
                            <AccordionTrigger>{faculty.name}</AccordionTrigger>
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
                                                Biaya Almamater
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
                                            <th
                                                rowSpan={2}
                                                className="px-4 py-2 border border-zinc-300 text-center"
                                            >
                                                Biaya Matrikulasi
                                            </th>
                                            <th
                                                rowSpan={2}
                                                className="px-4 py-2 border border-zinc-300 text-center"
                                            >
                                                Biaya Ujian <span>*</span>
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
                                        {faculty.programs.map(
                                            (program, key) => (
                                                <tr key={key}>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {program.name}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            program.registration_fee
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            program.almamater_fee
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            program.tuition_fee
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            Number(
                                                                program
                                                                    .installments[0]
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            Number(
                                                                program
                                                                    .installments[1]
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            Number(
                                                                program
                                                                    .installments[2]
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            Number(
                                                                program.matriculation_fee
                                                            )
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 border border-zinc-300 text-xs">
                                                        {currency(
                                                            Number(
                                                                program.exam_fee
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

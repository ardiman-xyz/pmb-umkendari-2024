import {ColumnDef} from "@tanstack/react-table";
import {Department} from "@/types";
import formatRupiah from "@/Helpers/currency";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {Button} from "@/Components/ui/button";
import {ClipboardEdit, MoreHorizontal, Trash2} from "lucide-react";
import {useState} from "react";
import {ModalEdit} from "./ModalEdit";
import DeleteConfirm from "@/Pages/Admission/Faculty/_components/Department/ModalDelete";


export const columns: ColumnDef<Department>[] = [
    {
        id: "no",
        header: "No.",
        cell: ({row}) => {
            return (
                <p>{Number(row.id) + 1}</p>
            )
        }
    },
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        id: "accreditation",
        header: "Akreditasi",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs text-center">{row.original.accreditation}</p>
                </div>
            )
        }
    },
    {
        id: "registration_fee",
        header: "Jenjang",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{row.original.tuition_fees.degree_level}</p>
                </div>
            )
        }
    },
    {
        id: "capacity",
        header: "Kapasitas",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs text-center">{row.original.tuition_fees.capacity}</p>
                </div>
            )
        }
    },
    {
        id: "registrasi",
        header: "Registrasi",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.registration_fee)}</p>
                </div>
            )
        }
    },
    {
        id: "oritentasi",
        header: "Orientasi",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.orientation_fee)}</p>
                </div>
            )
        }
    },
    {
        id: "bpp",
        header: "BPP (Setiap semester)",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.tuition_fee_per_semester)}</p>
                </div>
            )
        }
    },
    {
        id: "BPS1",
        header: "BPS1",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.bps_semester_1)}</p>
                </div>
            )
        }
    },
    {
        id: "BPS2",
        header: "BPS2",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.bps_semester_2)}</p>
                </div>
            )
        }
    },
    {
        id: "BPS3",
        header: "BPS3",
        cell: ({row}) => {
            return (
                <div>
                    <p className="capitalize text-xs">{formatRupiah(row.original.tuition_fees.bps_semester_3)}</p>
                </div>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return <ActionMenu data={row.original} />;
        },
    },
]


const ActionMenu = ({ data }: { data: Department }) => {

    const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => setIsModalEditOpen(true)}
                    >
                        <ClipboardEdit className="h-4 w-4 mr-2" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={()=> setIsModalDeleteOpen(true)}
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {
                isModalEditOpen && (
                    <ModalEdit
                        department={data}
                        onClose={() => setIsModalEditOpen(false)}
                    />
                )
            }
            {
                isModalDeleteOpen && (
                    <DeleteConfirm department={data} onClose={() => setIsModalDeleteOpen(false)}  />
                )
            }

        </div>
    );
};

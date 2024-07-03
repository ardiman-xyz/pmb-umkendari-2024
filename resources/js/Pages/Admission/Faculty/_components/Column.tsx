import { ColumnDef } from "@tanstack/react-table"
import {Faculty} from "@/types";
import {Link, router} from "@inertiajs/react";
import {useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {Button} from "@/Components/ui/button";
import {ClipboardEdit, MoreHorizontal, Trash2} from "lucide-react";
import DeleteConfirm from "@/Pages/Admission/Faculty/_components/ModalDelete";

export const columns: ColumnDef<Faculty>[] = [
    {
        id: "name",
        header: "Nama",
        cell: ({ row }) => {
            return (
                <div >
                    <Link href={route("faculty.show", row.original.id)}>
                       <p className="hover:underline text-blue-1 hover:text-blue-2 font-semibold capitalize"> {row.original.name}</p>
                    </Link>
                </div>
            )
        },

    },
    {
        id: "capacity",
        header: "Daya Tampung",
        cell: ({ row }) => {
            const totalCapacity = row.original.departments.reduce((sum, department) => {
                return sum + (department.tuition_fees?.capacity || 0);
            }, 0);

            return (
                <div>
                    {totalCapacity}
                </div>
            );
        },

    },
    {
        id: "department",
        header: "Jumlah Prodi",
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.departments.length} Prodi
                </div>
            )
        },

    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            return <ActionMenu data={row.original} />;
        },
    },
]




const ActionMenu = ({ data }: { data: Faculty }) => {

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
                        onClick={() => router.get(route("faculty.show", data.id))}
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
                isModalDeleteOpen && (
                    <DeleteConfirm faculty={data} onClose={() => setIsModalDeleteOpen(false)}  />
                )
            }

        </div>
    );
};

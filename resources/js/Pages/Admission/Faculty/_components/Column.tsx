import { ColumnDef } from "@tanstack/react-table"
import {Faculty} from "@/types";
import {Link} from "@inertiajs/react";

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
        id: "action",
        header: "Aksi",
        cell: ({ row }) => {
            return <div className="font-medium">Aksi</div>
        },

    },
]

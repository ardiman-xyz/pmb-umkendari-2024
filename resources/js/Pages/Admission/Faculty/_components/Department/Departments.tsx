import {IconBadge} from "@/Components/IconBadge";
import {SchoolIcon} from "lucide-react";
import {DataTable} from "./DataTable";
import {columns} from "./Column";
import {Button} from "@/Components/ui/button";
import {useState} from "react";
import {ModalCreate} from "@/Pages/Admission/Faculty/_components/Department/ModalCreate";
import {Department, Faculty} from "@/types";

interface DepartmentProps {
    faculty : Faculty;
    departments: Department[]
}

export const Departments = ({faculty, departments}: DepartmentProps) => {

    const [modalCreate, setModalCreate] = useState<boolean>(false);

    const handleCloseModalCreate = () => {
        setModalCreate(false)
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                    <IconBadge icon={SchoolIcon}/>
                    <h1 className="text-2xl font-medium">Program Studi</h1>
                </div>
                <Button variant="primary" onClick={() => setModalCreate(true)}>Tambah Prodi</Button>
            </div>
            <div className="mt-6">
                <DataTable columns={columns} data={departments}/>
            </div>

          <ModalCreate isOpen={modalCreate} handleClose={handleCloseModalCreate} facultyId={faculty.id} />
        </div>
    )
}

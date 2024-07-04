import {Information} from "@/types";

interface ProcedureProps {
    data: Information
}

const Procedure = ({data}: ProcedureProps) => {
    return (
        <div>
            <img src={data.roadmap ?? "/svg/alur_pendaftaran_2024.svg"} alt="alur pendaftaran" />
        </div>
    );
};

export default Procedure;

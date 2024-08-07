import {AlertCircle} from "lucide-react";

interface FormErrorProps {
    message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
};

export default FormError;

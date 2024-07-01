import React from "react";

import {
    Dialog,
    DialogContent, DialogTitle,
} from "@/Components/ui/dialog";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const ContainerModal = ({ isOpen, onClose, children, title = "Modal"}: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent >
                <DialogTitle>
                    {title}
                </DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default ContainerModal;

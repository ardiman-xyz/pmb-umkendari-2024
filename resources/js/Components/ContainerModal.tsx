import React from "react";

import {
    Dialog,
    DialogContent,
} from "@/Components/ui/dialog";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ContainerModal = ({ isOpen, onClose, children}: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default ContainerModal;

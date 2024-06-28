
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/Components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Nama harus di isi",
    }),
})


import ContainerModal from "@/Components/ContainerModal";
import {useState} from "react";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";

interface ModalCreateProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalCreate = ({isOpen, onClose}: ModalCreateProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const { formState } = form;

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        setIsLoading(true)
        toast.promise(
            axios.post(route("faculty.store"), values),
            {
                loading: "Menyimpan data...",
                success: (res) => {
                    const {message} = res.data
                    setIsLoading(false);
                    // router.get(route("achievement.index"));
                    router.reload();
                    form.reset()
                    onClose();
                    return `${message}`
                },
                error: (err) => {
                    const { message } = err.response.data;
                    setIsLoading(false);
                    return "Gagal menyimpan";
                },
            }
        );
    }

    return (
       <ContainerModal
        isOpen={isOpen}
        onClose={onClose}
        title="Buat Fakultas Baru"
       >
           <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                   <FormField
                       control={form.control}
                       name="name"
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Nama Fakultas</FormLabel>
                               <FormControl>
                                   <Input placeholder="Keguruan dan Ilmu Pendidikan" {...field} disabled={isLoading} />
                               </FormControl>
                               <FormDescription>
                                   Masukkan nama tanpa fakultas tanpa awalan <span className="font-bold">*Fakultas</span>
                               </FormDescription>
                               <FormMessage />
                           </FormItem>
                       )}
                   />
                   <Button type="submit" variant="primary" disabled={!formState.isDirty || formState.isValidating || isLoading}>
                       Simpan
                   </Button>
               </form>
           </Form>
       </ContainerModal>
    )
}

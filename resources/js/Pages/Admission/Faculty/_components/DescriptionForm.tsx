import { Pencil, RotateCw } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/Components/ui/button";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";

import { router } from "@inertiajs/react";
import {toast} from "sonner";
import axios from "axios";
import { Textarea } from "@/Components/ui/textarea"

interface TitleFormProps {
    initialData: {
        description: string | null;
        columnName: string;
    },
    id: number;
}

const formSchema = z.object({
    value: z.string(),
    columnName: z.string().min(1, {
        message: "Input harus diisi"
    })
});

export const DescriptionForm = ({ initialData, id }: TitleFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: initialData.description ?? "",
            columnName: initialData.columnName
        },
    });

    const { isValid } = form.formState;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        axios.put(route("faculty.update-profile", id), values)
            .then(res => {
                setIsLoading(false)
                toggleEdit()
                toast.success("Berhasil di update")
                router.reload()
            }).catch(e => {
                console.info(e)
                toast.error("Something went wrong")
            }).finally(() => {
                setIsLoading(false)
        })
    };

    return (
        <div className="mt-6 bg-slate-100 rounded-md p-4 border">
            <div className="font-medium flex items-center justify-between">
                Deskripsi Fakultas
                <Button onClick={toggleEdit} variant={"ghost"}>
                    {isEditing ? (
                        <>Batal</>
                    ) : (
                        <>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && <p className="text-sm mt-3">{initialData.description ?? <span className="text-sm text-muted-foreground">Tidak ada deskripsi</span>}</p>}

            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="value"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-x-2 mt-4">
                            <Button
                                disabled={!isValid || isLoading || form.getValues("value") === ""}
                                type="submit"
                                variant="primary"
                            >
                                {isLoading && (
                                    <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Simpan
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    );
};

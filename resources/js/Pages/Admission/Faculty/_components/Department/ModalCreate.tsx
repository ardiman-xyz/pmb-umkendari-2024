import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/Components/ui/button"
import {
    Form,
    FormControl, FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import {DepartmentFormSchema} from "@/Schemas/Index";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import Modal from "@/Components/Modal";
import {Heading} from "@/Components/Heading";
import {Separator} from "@/Components/ui/separator";
import {toast} from "sonner";
import axios from "axios";
import {router} from "@inertiajs/react";
import {useState} from "react";


interface ModalCreateProps {
    isOpen : boolean;
    handleClose : () => void;
    facultyId: number;
}

export const ModalCreate = ({isOpen, handleClose, facultyId}: ModalCreateProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof DepartmentFormSchema>>({
        resolver: zodResolver(DepartmentFormSchema),
        defaultValues: {
            name: "",
            faculty: facultyId,
            accreditation: "",
            registration_fee: "",
            orientation_fee: "",
            tuition_fee_per_semester: "",
            bps_semester_1: "",
            bps_semester_2: "",
            bps_semester_3: "",
            degree_level: "",
            seminar_fee: "",
            matriculation_fee: "",
        },
    });
    const {  watch } = form;

    const degreeLevel = watch("degree_level");

    const onClose = () => {
        form.reset();
        handleClose()
    }

    function onSubmit(values: z.infer<typeof DepartmentFormSchema>) {

        if(isLoading)return;

        setIsLoading(true)
        toast.promise(
            axios.post(route("department.store"), values),
            {
                loading: "Menyimpan data...",
                success: (res) => {
                    const {message, data} = res.data
                    setIsLoading(false);
                    router.reload()
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
        <div>
            <Modal
                show={isOpen}
                onClose={handleClose}
            >
                <div className="px-8 py-6 overflow-y-auto h-[700px]">
                    <Heading title="Tambah prodi" />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Nama Prodi</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accreditation"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Akreditasi</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Contoh: A, B (baik)
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="degree_level"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Jenjang Pendidikan</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="sarjana">Sarjana</SelectItem>
                                                <SelectItem value="pascasarjana">Pascasarjana</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Separator className="my-10"/>
                            <p className="font-semibold">Biaya Pendidikan</p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                                <FormField
                                    control={form.control}
                                    name="orientation_fee"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Orientasi</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="registration_fee"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Registrasi</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="tuition_fee_per_semester"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>BPP (Setiap semester)</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                {degreeLevel === "pascasarjana" && (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="seminar_fee"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Biaya Ujian</FormLabel>
                                                    <FormControl>
                                                        <Input type={"number"} {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="matriculation_fee"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Biaya Matrikulasi</FormLabel>
                                                    <FormControl>
                                                        <Input type={"number"} {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                )
                            }
                            </div>
                            <Separator className="my-10"/>
                            <p className="font-semibold">BPS (Diangsur dalam 3 semester)</p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                                <FormField
                                    control={form.control}
                                    name="bps_semester_1"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Smt. 1</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bps_semester_2"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Smt. 2</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bps_semester_3"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Smt. 3</FormLabel>
                                            <FormControl>
                                                <Input type={"number"} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <Button type="submit" variant="primary" disabled={isLoading}>Submit</Button>
                        </form>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

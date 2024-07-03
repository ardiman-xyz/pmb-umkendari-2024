import {z} from "zod";

export const DepartmentFormSchema = z.object({
    name: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    faculty: z.number().min(1, {
        message: "Silahkan pilih fakultas"
    }).max(50),
    accreditation: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    degree_level: z.string().min(1, {
        message: "Silahkan pilih terlebih dahulu!"
    }).max(50),
    registration_fee: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    orientation_fee: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    tuition_fee_per_semester: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    bps_semester_1: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    bps_semester_2: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    bps_semester_3: z.string().min(1, {
        message: "Input harus di isi!"
    }).max(50),
    seminar_fee: z.string().optional(),
    matriculation_fee: z.string().optional(),
    capacity: z.string().optional(),
})

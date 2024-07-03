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
});


export const PersonalInfoSchema = z
    .object({
        email: z.string().email({
            message: "Email tidak valid"
        }).min(1, "Username lama harus diisi"),
    })



export const PasswordFormSchema = z
    .object({
        old_password: z.string().min(1, "Kata sandi lama harus diisi"),
        new_password: z
            .string()
            .min(1, "Kata sandi baru harus diisi")
            .min(8, "Kata sandi baru harus memiliki minimal 8 karakter"),
        confirm_password: z.string().min(1, "Konfirmasi kata sandi harus diisi"),
    })
    .refine((data) => data.new_password === data.confirm_password, {
        message: "Konfirmasi kata sandi tidak cocok dengan kata sandi baru",
        path: ["confirm_password"],
    });

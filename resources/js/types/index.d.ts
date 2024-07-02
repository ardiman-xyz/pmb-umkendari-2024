export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};


export type Slider = {
    id: number;
    image_path: string;
    isEksternalLInk: number | null;
    link: string | null;
    created_at: string;
    updated_at: string;
}

export type Facility = {
    id: number;
    name: string;
    image_path: string;
}

export type Achievement = {
    id: number;
    title: string;
    image_path: string;
}

export type Faculty = {
    id: number;
    name: string;
    slug: string;
    cover: string | null;
    description: string | null;
    departments: Department[];
    created_at: string;
    updated_at: string;
}

export type Department = {
    id: number;
    faculty_id: number;
    name: string;
    slug: string;
    cover: string | null;
    description: string | null;
    accreditation: string;
    created_at: string;
    updated_at: string;
    tuition_fees: TuitionFees
}


export type TuitionFees = {
    id: number;
    department_id: number;
    degree_level: string;
    registration_fee: number;
    orientation_fee: number;
    tuition_fee_per_semester: number;
    bps_semester_1: number;
    bps_semester_2: number;
    bps_semester_3: number;
    seminar_fee: number;
    matriculation_fee: number;
}

export type Information = {
    id: number;
    roadmap: string | null;
    admission_brochure: string | null;
    entry_paths_requirements: string | null;
}

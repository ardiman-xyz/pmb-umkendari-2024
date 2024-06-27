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

import { create } from 'zustand';
import {Faculty} from "@/types";


interface FacultyStore {
    faculty: Faculty | null;
    setFaculty: (faculty: Faculty) => void;
}

export const useFacultyStore = create<FacultyStore>((set) => ({
    faculty: null,
    setFaculty: (faculty) => set({ faculty }),
}));

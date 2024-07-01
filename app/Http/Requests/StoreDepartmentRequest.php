<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDepartmentRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50',
            'faculty' => 'required|integer|min:1|max:50',
            'accreditation' => 'required|string|max:50',
            'degree_level' => 'required|string|max:50',
            'registration_fee' => 'required|string|max:50',
            'orientation_fee' => 'required|string|max:50',
            'tuition_fee_per_semester' => 'required|string|max:50',
            'bps_semester_1' => 'required|string|max:50',
            'bps_semester_2' => 'required|string|max:50',
            'bps_semester_3' => 'required|string|max:50',
            'seminar_fee' => 'nullable|string|max:50',
            'matriculation_fee' => 'nullable|string|max:50',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'Input harus di isi!',
            'string' => 'Input harus berupa teks!',
            'integer' => 'Input harus berupa angka!',
            'max' => 'Input tidak boleh lebih dari :max karakter!',
            'min' => 'Input harus minimal :min!',
            'faculty.required' => 'Silahkan pilih fakultas',
            'degree_level.required' => 'Silahkan pilih terlebih dahulu!',
        ];
    }
}

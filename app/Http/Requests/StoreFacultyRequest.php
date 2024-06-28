<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFacultyRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            "name" => "required|string|max:255",
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama fakultas harus diisi.',
            'name.max' => 'Judul fasilitas tidak boleh lebih dari 255 karakter.',
        ];
    }

}

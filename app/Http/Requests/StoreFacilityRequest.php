<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Dimensions;

class StoreFacilityRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:webp,png,jpg|max:2048|dimensions:width=600,height=400',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul fasilitas harus diisi.',
            'title.max' => 'Judul fasilitas tidak boleh lebih dari 255 karakter.',
            'image.required' => 'Gambar fasilitas harus diunggah.',
            'image.image' => 'File yang diunggah harus berupa gambar.',
            'image.mimes' => 'Format gambar yang diizinkan: jpeg, png, jpg, gif.',
            'image.max' => 'Ukuran gambar tidak boleh lebih dari 2MB.',
            'image.dimensions' => 'Dimensi gambar harus 600x400 piksel.',
        ];
    }

}

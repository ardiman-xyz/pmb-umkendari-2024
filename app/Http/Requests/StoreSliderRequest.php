<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSliderRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'image' => 'required|image|mimes:webp,png,jpg|max:2048|dimensions:width=9000,height=3000',
        ];
    }

    public function messages(): array
    {
        return [
            'image.required' => 'Gambar wajib diunggah.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Gambar harus berformat webp, png, atau jpg.',
            'image.max' => 'Ukuran gambar tidak boleh lebih dari 2MB.',
            'image.dimensions' => 'Ukuran gambar harus 9000x3000 piksel',
        ];
    }
}

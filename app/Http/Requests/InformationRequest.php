<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InformationRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id' => 'nullable|string',
            'roadmap' => 'nullable|image|mimes:webp,png,jpg,svg|max:2048|dimensions:width=1920,height=1080',
            'admission_brochure' => 'nullable|mimes:pdf|max:10240',
            'entry_paths_requirements' => 'nullable|mimes:pdf|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            'roadmap.image' => 'File roadmap harus berupa gambar.',
            'roadmap.mimes' => 'Format roadmap harus jpeg, png, jpg, atau gif.',
            'roadmap.max' => 'Ukuran roadmap tidak boleh lebih dari 2MB.',
            'roadmap.dimensions' => 'Dimensi gambar harus 1920x1080 piksel.',

            'admission_brochure.mimes' => 'Format brosur admisi harus PDF.',
            'admission_brochure.max' => 'Ukuran brosur admisi tidak boleh lebih dari 10MB.',
            'entry_paths_requirements.mimes' => 'Format persyaratan jalur masuk harus PDF.',
            'entry_paths_requirements.max' => 'Ukuran persyaratan jalur masuk tidak boleh lebih dari 10MB.',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAchievementRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            "title" => "string|required|max:255",
        ];
    }
}

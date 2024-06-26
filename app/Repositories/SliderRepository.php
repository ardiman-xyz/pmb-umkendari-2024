<?php

namespace App\Repositories;

use App\Entities\Slider;
use App\Models\Slider as Model;

class SliderRepository
{

    public function getAll()
    {
        return Model::orderBy('created_at', 'desc')->get();
    }

    public function findById(int $id)
    {
        return Model::find($id);
    }

    public function save(Slider $slider)
    {
        return Model::create([
            "image_path" => $slider->imagePath,
            "isEksternalLink" => $slider->externalLink,
            "link" => $slider->link,
        ]);
    }
}

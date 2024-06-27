<?php

namespace App\Repositories;

use App\Entities\Facility;
use App\Models\Facility as Model;

class FacilityRepository
{
    public function getAll()
    {
        return Model::orderBy('created_at', 'desc')->get();
    }

    public function findById(int $id)
    {
        return Model::find($id);
    }

    public function save(Facility $facility)
    {
        return Model::create([
            "name" => $facility->name,
            "image_path" => $facility->imagePath,
        ]);
    }
}

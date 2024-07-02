<?php

namespace App\Repositories;

use App\Entities\Information;
use App\Models\Information as Model;

class InformationRepository
{

    public function findData()
    {
        return Model::first();
    }

    public function count(): int
    {
        return Model::count();
    }

    public function save(Information $information)
    {
        return Model::create([
           "roadmap" => $information->roadmap,
            "admission_brochure" => $information->admissionBrochure,
            "entry_paths_requirements" => $information->entryPathsRequirements
        ]);
    }

    public function findById(int $id): ?Model
    {
        return Model::find($id);
    }
}

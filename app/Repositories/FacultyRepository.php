<?php

namespace App\Repositories;

use App\Models\Faculty as Model;

class FacultyRepository
{
    public function save(string $name, string $lug)
    {
        return Model::create([
           "name" => $name,
           "slug" => $lug
        ]);
    }

    public function findByName(string $name)
    {
        return Model::where("name", $name)->first();
    }
}

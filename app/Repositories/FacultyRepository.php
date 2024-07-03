<?php

namespace App\Repositories;

use App\Models\Faculty as Model;

class FacultyRepository
{

    public function findAll()
    {
        return Model::with('departments.tuitionFees')->orderBy("created_at", "desc")->get();
    }

    public function save(string $name, string $lug)
    {
        return Model::create([
           "name" => $name,
           "slug" => $lug
        ]);
    }

    public function findById(int $id)
    {
        return Model::find($id);
    }

    public function findByName(string $name)
    {
        return Model::where("name", $name)->first();
    }


    public function getByIdWithRelations(int $id)
    {
        return Model::with('departments.tuitionFees')->findOrFail($id);
    }
}

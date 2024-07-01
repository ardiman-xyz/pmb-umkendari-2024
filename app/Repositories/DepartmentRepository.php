<?php

namespace App\Repositories;

use App\Entities\Department;
use App\Models\Department as Model;

class DepartmentRepository
{
    public function save(Department $data)
    {
        return Model::create([
            "faculty_id"    => $data->facultyId,
            "name"          => $data->name,
            "accreditation" => $data->accreditation,
            "slug"          => $data->slug,
            "cover"         => $data->cover,
            "description"   => $data->description,
        ]);
    }
}

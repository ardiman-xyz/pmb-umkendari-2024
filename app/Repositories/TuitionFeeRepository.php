<?php

namespace App\Repositories;

use App\Entities\TuitionFee;
use App\Models\TuitionFee as Model;

class TuitionFeeRepository
{
    public function save(TuitionFee $data)
    {
        return Model::create([
           "department_id" => $data->departmentId,
            "degree_level" => $data->degreeLevel,
            "registration_fee" => $data->registrationFee,
            "orientation_fee" => $data->orientationFee,
            "tuition_fee_per_semester" => $data->tuitionFeePerSemester,
            "bps_semester_1" => $data->bpsSemester1,
            "bps_semester_2" => $data->bpsSemester2,
            "bps_semester_3" => $data->bpsSemester3,
            "seminar_fee" => $data->seminarFee,
            "matriculation_fee" => $data->matriculationFee,
            "capacity" => $data->capacity,
        ]);
    }

    public function findByDepartmentId(int $departmentId): ?Model
    {
        return Model::where("department_id", $departmentId)->first();
    }
}

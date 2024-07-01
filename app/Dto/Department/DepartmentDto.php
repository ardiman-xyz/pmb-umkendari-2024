<?php

namespace App\Dto\Department;

class DepartmentDto
{
    public int $facultyId;
    public string $name;
    public string $accreditation;
    public ?string $cover = null;
    public ?string $description = null;
    public string $degree_level;
    public string $registration_fee;
    public string $orientation_fee;
    public string $tuition_fee_per_semester;
    public string $bps_semester_1;
    public string $bps_semester_2;
    public string $bps_semester_3;
    public ?string $seminar_fee;
    public ?string $matriculation_fee;

}

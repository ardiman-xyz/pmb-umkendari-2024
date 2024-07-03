<?php

namespace App\Entities;

class TuitionFee
{
    public ?string $id = null;
    public int $departmentId;
    public string $degreeLevel;
    public string $registrationFee;
    public string $orientationFee;
    public string $tuitionFeePerSemester;
    public string $bpsSemester1;
    public string $bpsSemester2;
    public string $bpsSemester3;
    public string $seminarFee;
    public ?string $matriculationFee = null;
    public ?int $capacity = null;
}

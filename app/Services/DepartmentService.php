<?php

namespace App\Services;

use App\Dto\Department\DepartmentDto;
use App\Entities\Department;
use App\Entities\TuitionFee;
use App\Repositories\DepartmentRepository;
use App\Repositories\FacultyRepository;
use App\Repositories\TuitionFeeRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DepartmentService
{
    public function __construct(
        protected DepartmentRepository $departmentRepository,
        protected FacultyRepository $facultyRepository,
        protected TuitionFeeRepository $tuitionFeeRepository,
    ){}

    public function create(DepartmentDTO $dto): array
    {

        DB::beginTransaction();
        try {

            $isFacultyExist = $this->facultyRepository->findById((int) $dto->facultyId);
            if(!$isFacultyExist) throw new Exception("Fakultas tidak ditemukan");

            $department = new Department();
            $department->name = $dto->name;
            $department->slug = Str::slug($dto->name);
            $department->facultyId = $isFacultyExist->id;
            $department->accreditation = $dto->accreditation;

            $department = $this->departmentRepository->save($department);

            $tuitionFee = new TuitionFee();
            $tuitionFee->departmentId = $department->id;
            $tuitionFee->degreeLevel = $dto->degree_level;
            $tuitionFee->registrationFee = $dto->registration_fee;
            $tuitionFee->orientationFee = $dto->orientation_fee;
            $tuitionFee->tuitionFeePerSemester = $dto->tuition_fee_per_semester;
            $tuitionFee->bpsSemester1 = $dto->bps_semester_1;
            $tuitionFee->bpsSemester2 = $dto->bps_semester_2;
            $tuitionFee->bpsSemester3 = $dto->bps_semester_3;
            $tuitionFee->seminarFee = $dto->seminar_fee;
            $tuitionFee->matriculationFee = $dto->matriculation_fee;

            $tuitionFee = $this->tuitionFeeRepository->save($tuitionFee);

            DB::commit();
            return [
                "department" => $department,
                "tuitionFee" => $tuitionFee
            ];

        }catch (Exception $exception){
            DB::rollBack();
            throw new Exception;
        }

    }
}

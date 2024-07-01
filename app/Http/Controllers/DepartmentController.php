<?php

namespace App\Http\Controllers;

use App\Dto\Department\DepartmentDto;
use App\Http\Requests\StoreDepartmentRequest;
use App\Services\DepartmentService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    public function __construct(
        protected DepartmentService $departmentService
    ){}

    public function index()
    {
        return Inertia::render("Admission/Department/Index", []);
    }

    public function store(StoreDepartmentRequest $request): JsonResponse
    {

        $data = $request->validated();

        $dto = new DepartmentDTO();
        $dto->name = $data['name'];
        $dto->facultyId = $data['faculty'];
        $dto->accreditation = $data['accreditation'];
        $dto->degree_level = $data['degree_level'];
        $dto->registration_fee = $data['registration_fee'];
        $dto->orientation_fee = $data['orientation_fee'];
        $dto->tuition_fee_per_semester = $data['tuition_fee_per_semester'];
        $dto->bps_semester_1= $data['bps_semester_1'];
        $dto->bps_semester_2 = $data['bps_semester_2'];
        $dto->bps_semester_3 = $data['bps_semester_3'];
        $dto->seminar_fee = $data['seminar_fee'] ?? 0;
        $dto->matriculation_fee = $data['matriculation_fee'] ?? 0;


        try {

            $data = $this->departmentService->create($dto);

            return response()->json([
                'status' => false,
                'message' => "Data berhasil ditambahkan!",
                'data' => $data
            ], 201);

        }catch (Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
                'data' => []
            ], 400);
        }


    }
}

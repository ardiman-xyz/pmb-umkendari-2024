<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFacultyRequest;
use App\Services\FacultyService;
use Exception;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class FacultyController extends Controller
{
    public function __construct(
        protected FacultyService $facultyService
    ){}

    public function index(): InertiaResponse
    {
        $faculties = $this->facultyService->getAll();

        return Inertia::render("Admission/Faculty/Index", [
            "faculties" => $faculties
        ]);
    }

    public function store(StoreFacultyRequest $request): JsonResponse
    {
        $data = $request->validated();

        try {

            $data = $this->facultyService->create($data['name']);

            return response()->json([
                "status" => true,
                "message" => "Data berhasil disimpan",
                "data" => $data
            ], 201);

        }catch (Exception $exception)
        {
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }
    }

    public function show(string $id): InertiaResponse
    {
        try {
            $faculty = $this->facultyService->getByIdRelation($id);

            return Inertia::render("Admission/Faculty/Show", [
                "faculty" => $faculty
            ]);

        }catch (Exception $exception)
        {
            abort(404);
        }
    }
}

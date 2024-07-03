<?php

namespace App\Http\Controllers;

use App\Http\Requests\CoverFacultyRequest;
use App\Http\Requests\StoreFacultyRequest;
use App\Services\FacultyService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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

    public function updateProfile(Request $request, string $id): JsonResponse
    {

        $value = $request->input("value");
        $columnName = $request->input("columnName");


        try {

            $data = $this->facultyService->updateProfile($value, $columnName, $id);

            return response()->json([
                "status" => true,
                "message" => "Data berhasil disimpan",
                "data" => $data
            ]);

        }catch (Exception $exception)
        {
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }

    }

    public function updateCover(CoverFacultyRequest $request, string $id): JsonResponse
    {
        $image = $request->file("image");

        try {

            $data = $this->facultyService->updateCover($image, $id);

            return response()->json([
                "status" => true,
                "message" => "Data berhasil disimpan",
                "data" => $data
            ]);

        }catch (Exception $exception)
        {
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }
    }

    public function destroy(string $id): JsonResponse
    {
        try {

            $data = $this->facultyService->deleteByIdRelation($id);

            return response()->json([
                "status" => true,
                "message" => "Data berhasil disimpan",
                "data" => $data
            ]);

        }catch (Exception $exception)
        {
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Dto\Facility\FacilityStore;
use App\Http\Requests\StoreFacilityRequest;
use App\Services\FacilityService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityController extends Controller
{
    public function __construct(
        protected FacilityService $facilityService
    ){}

    public function index(): \Inertia\Response
    {
        return Inertia::render("Profiles/Facility/Index");
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render("Profiles/Facility/Create");
    }

    public function store(StoreFacilityRequest $request): JsonResponse
    {
        $data = $request->validated();
        $image = $request->file('image');

        try {

            $dto = new FacilityStore();
            $dto->name = $data['title'];
            $dto->image = $image;

            $data = $this->facilityService->save($dto);

            return response()->json([
                'status' => false,
                'message' => "data berhasil disimpan!",
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

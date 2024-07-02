<?php

namespace App\Http\Controllers;

use App\Dto\Information\InformationDto;
use App\Http\Requests\InformationRequest;
use App\Services\InformationService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaView;

class InformationController extends Controller
{
    public function __construct(
        protected InformationService $informationService
    ){}

    public function index(): InertiaView
    {
        $data = $this->informationService->getData();

        return Inertia::render('Admission/Information/Index', [
            "data" => $data
        ]);
    }

    public function store(InformationRequest $request): JsonResponse
    {
        $data = $request->validated();
        if ($request->has('id')) {
            $id = $data['id'];
        } else {
            $id = null;
        }
        $roadmap = $request->file("roadmap");
        $admission_brochure = $request->file("admission_brochure");
        $entry_paths_requirements = $request->file("entry_paths_requirements");

        $dto = new InformationDTO();
        $dto->id = $id;
        $dto->roadmap = $roadmap;
        $dto->admission_brochure = $admission_brochure;
        $dto->entry_paths_requirements = $entry_paths_requirements;

        try {

            $data = $this->informationService->save($dto);

            return response()->json([
                "status" => true,
                "message" => "Data berhasil disimpan",
                "data" => $data
            ]   );

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

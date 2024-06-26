<?php

namespace App\Http\Controllers;

use App\Dto\Slider\Store;
use App\Http\Requests\StoreSliderRequest;
use App\Services\SliderService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class SliderController extends Controller
{
    public function __construct(
        protected SliderService $sliderService
    ){}

    public function index(): InertiaResponse
    {
        $sliders = $this->sliderService->getAll();

        return Inertia::render("Slider/Index", [
            "sliders" => $sliders
        ]);
    }

    public function create(): InertiaResponse
    {
        return Inertia::render("Slider/Create");
    }

    public function store(StoreSliderRequest $request): JsonResponse
    {
        $file = $request->file("image");

        try {

            $dto = new Store();
            $dto->file = $file;

            $data = $this->sliderService->save($dto);

            return response()->json([
                'status' => false,
                'message' => "Gambar berhasil ditambahkan!",
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

    public function destroy(string $id): JsonResponse
    {
        try {

            $data = $this->sliderService->delete($id);

            return response()->json([
                'status' => false,
                'message' => "Slider berhasil dihapus",
                'data' => $data
            ]);

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

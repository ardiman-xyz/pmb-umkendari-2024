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
        return Inertia::render("Slider/Index");
    }

    public function create(): InertiaResponse
    {
        return Inertia::render("Slider/Create");
    }

    public function store(StoreSliderRequest $request)
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
}

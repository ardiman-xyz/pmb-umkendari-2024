<?php

namespace App\Http\Controllers;

use App\Dto\Achievement\StoreAchievement;
use App\Http\Requests\StoreAchievementRequest;
use App\Services\AchievementService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AchievementController extends Controller
{
    public function __construct(
        protected AchievementService $achievementService
    ){}

    public function index(): \Inertia\Response
    {
        return Inertia::render("Profiles/Achievement/Index", []);
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render("Profiles/Achievement/Create");
    }

    public function store(StoreAchievementRequest $request): JsonResponse
    {
        $data = $request->validated();
        $image = $request->file('image');

        try {

            $dto = new StoreAchievement();
            $dto->title = $data['title'];
            $dto->image = $image;

            $data = $this->achievementService->create($dto);

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

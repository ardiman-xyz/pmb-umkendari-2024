<?php

namespace App\Http\Controllers;

use App\Dto\Achievement\StoreAchievement;
use App\Http\Requests\StoreAchievementRequest;
use App\Http\Requests\UpdateAchievementRequest;
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
        $achievements = $this->achievementService->getAll();

        return Inertia::render("Profiles/Achievement/Index", [
            "achievements" => $achievements
        ]);
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

    public function update(UpdateAchievementRequest $request, string $id): JsonResponse
    {
        $data = $request->validated();

        try {

            $data = $this->achievementService->update($id, $data['title']);

            return response()->json([
                'status' => false,
                'message' => "data berhasil diupdate!",
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

    public function destroy(string $id): JsonResponse
    {
        try {

            $this->achievementService->delete($id);

            return response()->json([
                'status' => false,
                'message' => "data berhasil di hapus!",
                'data' => []
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

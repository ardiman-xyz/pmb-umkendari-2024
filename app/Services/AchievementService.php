<?php

namespace App\Services;

use App\Dto\Achievement\StoreAchievement;
use App\Entities\Achievement;
use App\Helpers\StorageServiceHelper;
use App\Repositories\AchievementRepository;
use Exception;
use Illuminate\Support\Facades\DB;

class AchievementService
{
    public function __construct(
        protected AchievementRepository $achievementRepository,
        protected StorageServiceHelper $storageService
    ){}

    public function getAll()
    {
        return $this->achievementRepository->getAll();
    }

    public function create(StoreAchievement $dto)
    {
        try {
            DB::beginTransaction();

            $fileData = $this->storageService->uploadFile($dto->image);

            $data = new Achievement();
            $data->title = $dto->title;
            $data->imagePath = $fileData['path'];

            $res = $this->achievementRepository->save($data);

            DB::commit();
            return $res;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function update(string $id, string $title)
    {
        $achievement = $this->achievementRepository->findById((int)$id);
        if(!$achievement) throw new Exception('Data tidak ditemukan');

        $achievement->title = $title;
        $achievement->save();

        return $achievement;
    }

    public function delete(string $id): bool
    {
        $achievement = $this->achievementRepository->findById($id);

        if (!$achievement) {
            throw new Exception('Data tidak ditemukan');
        }

        try {
            DB::beginTransaction();

            $this->storageService->deleteFile($achievement->image_path);
            $achievement->delete();

            DB::commit();
            return true;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menghapus data: ' . $e->getMessage());
        }
    }
}

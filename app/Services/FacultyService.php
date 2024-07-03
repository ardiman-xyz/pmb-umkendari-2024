<?php

namespace App\Services;

use App\Helpers\StorageServiceHelper;
use App\Repositories\FacultyRepository;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FacultyService
{
    public function __construct(
        protected FacultyRepository $facultyRepository,
        protected StorageServiceHelper $storageService
    ){}

    public function getAll()
    {
        return $this->facultyRepository->findAll();
    }

    public function create(string $name)
    {
        $isNameAlreadyExist = $this->facultyRepository->findByName($name);
        if($isNameAlreadyExist) throw new Exception("Nama Fakultas sudah ada");

        $slug = Str::slug($name);
        $name = trim($name);
        $name = Str::lower($name);

        return $this->facultyRepository->save($name, $slug);
    }

    public function getByIdRelation(string $id)
    {
        $isFacultyAlreadyExist = $this->facultyRepository->findById((int)$id);
        if(!$isFacultyAlreadyExist) throw new Exception("Fakultas sudah ada");

        return $this->facultyRepository->getByIdWithRelations((int)$id);
    }

    public function updateProfile(string $value, string $column, string $id)
    {
        $faculty = $this->facultyRepository->findById((int)$id);
        if(!$faculty) throw new Exception("Fakultas tidak ditemukan");

        $faculty->$column = $value;
        $faculty->save();

        return $faculty;
    }

    public function updateCover(UploadedFile $file, string $id)
    {
        $faculty = $this->facultyRepository->findById((int)$id);
        if(!$faculty) throw new Exception("Fakultas tidak ditemukan");

        try {
            DB::beginTransaction();

            $fileData = $this->storageService->uploadFile($file);

            $faculty->cover = $fileData['path'];;
            $faculty->save();

            DB::commit();
            return $faculty;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function deleteByIdRelation(string $id): bool
    {
        $faculty = $this->facultyRepository->findById((int)$id);
        if (!$faculty) throw new Exception("Fakultas tidak ditemukan");

        DB::beginTransaction();
        try {
            foreach ($faculty->departments as $department) {
                $department->tuitionFees()->delete();
            }

            $faculty->departments()->delete();

            if ($faculty->cover) {
                $this->storageService->deleteFile($faculty->cover);
            }

            $faculty->delete();

            DB::commit();
            return true;

        } catch (Exception $exception) {
            DB::rollBack();
            throw new Exception($exception->getMessage());
        }
    }
}

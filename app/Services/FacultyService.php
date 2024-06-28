<?php

namespace App\Services;

use App\Repositories\FacultyRepository;
use Exception;
use Illuminate\Support\Str;

class FacultyService
{
    public function __construct(
        protected FacultyRepository $facultyRepository
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
        if($isFacultyAlreadyExist) throw new Exception("Fakultas sudah ada");

        return $this->facultyRepository->getByIdWithRelations((int)$id);
    }
}

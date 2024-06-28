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

    public function create(string $name)
    {
        $isNameAlreadyExist = $this->facultyRepository->findByName($name);
        if($isNameAlreadyExist) throw new Exception("Nama Fakultas sudah ada");

        $slug = Str::slug($name);
        $name = trim($name);
        $name = Str::lower($name);

        return $this->facultyRepository->save($name, $slug);
    }
}

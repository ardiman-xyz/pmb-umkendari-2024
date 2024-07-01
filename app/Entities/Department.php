<?php

namespace App\Entities;

class Department
{
    public ?string $id = null;
    public int $facultyId;
    public string $name;
    public string $slug;
    public string $accreditation;
    public ?string $cover = null;
    public ?string $description = null;
}

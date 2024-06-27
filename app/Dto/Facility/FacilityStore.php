<?php

namespace App\Dto\Facility;

use Illuminate\Http\UploadedFile;

class FacilityStore
{
    public string $name;
    public UploadedFile $image;
}

<?php

namespace App\Dto\Achievement;

use Illuminate\Http\UploadedFile;

class StoreAchievement
{
    public string $title;
    public UploadedFile $image;
}

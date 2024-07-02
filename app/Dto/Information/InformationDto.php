<?php

namespace App\Dto\Information;

use Illuminate\Http\UploadedFile;

class InformationDto
{
    public ?string $id = null;
    public ?UploadedFile $roadmap = null;
    public ?UploadedFile $admissionBrochure = null;
    public ?UploadedFile $entryPathsRequirements = null;
}

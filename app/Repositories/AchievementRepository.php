<?php

namespace App\Repositories;

use App\Entities\Achievement;
use App\Models\Achievement as Model;

class AchievementRepository
{
    public function getAll()
    {
        return Model::orderBy('created_at', 'desc')->get();
    }

    public function findById(int $id)
    {
        return Model::find($id);
    }

    public function save(Achievement $achievement)
    {
        return Model::create([
            "title" => $achievement->title,
            "image_path" => $achievement->imagePath,
        ]);
    }
}

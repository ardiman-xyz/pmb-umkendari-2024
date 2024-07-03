<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\User as Model;

class UserRepository
{

    public function getByEmail(string $email)
    {
        return Model::where("email", $email)->first();
    }

    public function isDuplicateEmail(string $email, int $userId)
    {
        return Model::where('email', $email)
            ->where('id', '!=', $userId)
            ->exists();
    }

    public function getByRoleTeacher()
    {
        return Model::whereHas('roles', function($q){
            $q->where('name', 'Teacher');
        })->orderBy("id", "desc")->get();
    }

    public function getTeacherBySchoolId(string $schoolId)
    {
        return Model::where('school_id', $schoolId)->role('Teacher')->get();
    }


    public function getById(string $id)
    {
        return Model::where("id", $id)->first();
    }

    public function update(string $id, User $user)
    {
        $user->id = $id;
        $user->save();

        return $user;
    }
}

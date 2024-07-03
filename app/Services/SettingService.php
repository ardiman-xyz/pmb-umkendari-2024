<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Exception;

class SettingService
{
    public function __construct(
        protected UserRepository $userRepository,
    ){}

    public function updateEmail(string $email, string $userId)
    {
        $user = $this->userRepository->getById($userId);
        if (!$user) throw new Exception("User tidak ditemukan");

        $existingUser = $this->userRepository->isDuplicateEmail($email, $userId);
        if ($existingUser)  throw new Exception("Email sudah digunakan oleh pengguna lain");

        $user->email = $email;
        $user->save();

        return $user;
    }

}

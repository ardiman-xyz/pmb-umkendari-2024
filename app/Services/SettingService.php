<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Exception;
use Illuminate\Support\Facades\Hash;

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

    /**
     * @throws Exception
     */
    public function updateUserPassword(string $userId, string $newPassword, string $oldPassword)
    {
        $user = $this->userRepository->getById($userId);
        if (!$user) {
            throw new Exception("User tidak ditemukan");
        }

        if (!Hash::check($oldPassword, $user->password)) {
            throw new Exception("Password lama tidak sesuai");
        }

        if ($oldPassword === $newPassword) {
            throw new Exception("Password baru harus berbeda dari password lama");
        }

        $hashedPassword = Hash::make($newPassword);

        $user->password = $hashedPassword;
        $user->save();

        // You might want to perform additional actions here, such as:
        // - Logging the password change
        // - Sending a notification email to the user
        // - Invalidating other sessions (if you want to force re-login after password change)

        return $user;
    }


}

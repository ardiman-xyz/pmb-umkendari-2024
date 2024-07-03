<?php

namespace App\Http\Controllers\Settings;

use App\Http\Requests\UpdateEmailRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Services\SettingService;
use Illuminate\Http\JsonResponse;
use Exception;
use Illuminate\Support\Facades\Auth;

class AccountSetting
{
    public function __construct(
        protected SettingService $settingService
    ){}

    public function updateEmail(UpdateEmailRequest $request, string $userId): JsonResponse
    {
        $data = $request->validated();
        $email = $data['email'];

        try {

            $res = $this->settingService->updateEmail($email, $userId);

            return response()->json([
                "status" => false,
                "message" => "Email berhasil di update",
                "data" => $res
            ]);

        }catch (Exception $exception){
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }
    }

    public function updatePassword(UpdatePasswordRequest $request): JsonResponse
    {
        $data = $request->validated();

        try {
            $res = $this->settingService->updateUserPassword(
                Auth::user()->id,
                $data['new_password'],
                $data['old_password'],
            );

            return response()->json([
                "status" => false,
                "message" => "Password berhasil di update",
                "data" => $res
            ], 201);


        }catch (Exception $exception){
            return response()->json([
                "status" => false,
                "message" => $exception->getMessage(),
                "data" => null
            ], 400);
        }
    }
}

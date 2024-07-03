<?php

namespace App\Http\Controllers\Settings;

use App\Http\Requests\UpdateEmailRequest;
use App\Services\SettingService;
use Illuminate\Http\JsonResponse;
use Exception;

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
}

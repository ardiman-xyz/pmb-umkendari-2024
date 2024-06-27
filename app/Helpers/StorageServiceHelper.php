<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Http;
use Exception;

class StorageServiceHelper
{
    protected string $baseUrl;
    protected string $accessKey;
    protected string $secretKey;

    public function __construct()
    {
        $this->baseUrl = env('STORAGE_SERVICE_URL', 'https://files.umkendari.ac.id/api');
        $this->accessKey = env('STORAGE_ACCESS_KEY');
        $this->secretKey = env('STORAGE_SECRET_KEY');
    }

    protected function getHeaders(): array
    {
        return [
            'X-Access-Key' => $this->accessKey,
            'X-Secret-Key' => $this->secretKey,
        ];
    }

    public function uploadFile($file): array
    {
        try {
            $response = Http::withHeaders($this->getHeaders())
                ->attach(
                    'file',
                    file_get_contents($file),
                    $file->getClientOriginalName(),
                    ['Content-Type' => $file->getMimeType()]
                )
                ->post($this->baseUrl . '/media');

            if (!$response->successful()) {
                throw new Exception('Gagal mengunggah file: ' . $response->body());
            }

            $responseData = $response->json();

            if (!isset($responseData['data']) || !is_array($responseData['data'])) {
                throw new Exception('Response tidak valid dari storage service');
            }

            $fileData = $responseData['data'];

            if (!isset($fileData['path']) || !isset($fileData['name'])) {
                throw new Exception('Data file tidak lengkap dari storage service');
            }

            return $fileData;

        } catch (Exception $e) {
            throw new Exception('Gagal mengunggah file: ' . $e->getMessage());
        }
    }

    public function deleteFile($filePath): bool
    {
        try {
            $response = Http::withHeaders($this->getHeaders())
                ->post($this->baseUrl . '/media/delete', [
                    'file_path' => $filePath
                ]);

            if (!$response->successful()) {
                throw new Exception('Gagal menghapus file: ' . $response->status() . ' - ' . $response->body());
            }

            $responseData = $response->json();

            if (!isset($responseData['status']) || $responseData['status'] !== true) {
                throw new Exception('Gagal menghapus file dari storage service: ' . json_encode($responseData));
            }

            return true;

        } catch (Exception $e) {
            throw new Exception('Gagal menghapus file: ' . $e->getMessage());
        }
    }
}

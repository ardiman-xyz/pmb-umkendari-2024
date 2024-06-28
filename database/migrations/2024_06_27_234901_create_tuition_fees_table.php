<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tuition_fees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("department_id");
            $table->string('degree_level');
            $table->unsignedBigInteger('registration_fee');
            $table->unsignedBigInteger('orientation_fee');
            $table->unsignedBigInteger('tuition_fee_per_semester');
            $table->unsignedBigInteger('bps_semester_1');
            $table->unsignedBigInteger('bps_semester_2');
            $table->unsignedBigInteger('bps_semester_3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tuition_fees');
    }
};

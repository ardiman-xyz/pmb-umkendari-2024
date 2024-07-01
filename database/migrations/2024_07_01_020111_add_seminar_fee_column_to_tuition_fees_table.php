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
        Schema::table('tuition_fees', function (Blueprint $table) {
            $table->unsignedBigInteger("seminar_fee")->nullable()->after("bps_semester_3");
            $table->unsignedBigInteger("matriculation_fee")->nullable()->after("seminar_fee");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tuition_fees', function (Blueprint $table) {
            $table->dropColumn(["seminar_fee", "matriculation_fee"]);
        });
    }
};

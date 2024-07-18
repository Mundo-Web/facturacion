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
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('type_document');
            $table->string('number_document');
            $table->string('name'); // tradename
            $table->string('lastname'); // businessname
            $table->string('birthdate');
            $table->string('gender');
            $table->string('email');
            $table->string('phone');
            $table->string('ubigeo');
            $table->string('address');
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};

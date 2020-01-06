<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersWeathersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_weathers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->uuid('users_id')->references('id')->on('users');
            $table->string('longitude',10);
            $table->string('latitude', 10);
            $table->unique(['longitude', 'latitude'], 'UniqueGeoLocation');
            $table->boolean('favourite')->default(false);
            $table->boolean('homepage')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_weathers');
    }
}

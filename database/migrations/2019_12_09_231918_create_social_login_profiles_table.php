<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialLoginProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_login_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->uuid('users_id')->references('id')->on('users');
            $table->string('google_id', 200)->nullable();
            $table->string('facebook_id', 200)->nullable();
            $table->string('twitter_id', 200)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_login_profiles');
    }
}

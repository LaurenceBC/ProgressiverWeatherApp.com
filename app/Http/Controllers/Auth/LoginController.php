<?php

namespace ProgressiveWeatherApp\Http\Controllers\Auth;

use ProgressiveWeatherApp\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use Socialite;
use Illuminate\Support\Str;
use ProgressiveWeatherApp\User;
use ProgressiveWeatherApp\SocialLoginProfile;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;



    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }



    /**
     * OVVERIDE: For json response to VueJS
     *
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {


        return response()->json([
            'logggedIn' => true,
            'authUser' => $user,
            'csrf_token' => csrf_token(),
            'redirect' => $this->redirectTo

        ], 200);
    }


    /**
     * The user has logged out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    protected function loggedOut(Request $request)
    {
        //Regenerate new csrf token to return.
        //$request->session()->regenerateToken();
        //Retun ok and new csrf_token
        return response()->json(['ok', 'csrf_token' => $request->session()->regenerateToken()], 200);
    }


    /**
     * Redirects user to the providers Oauth2 login.
     *
     * @return
     */
    public function redirectToProvider($driver)
    {
        return Socialite::driver($driver)->redirect();
    }

    /**
     *
     *
     *
     */
    public function handleProviderCallback($driver)
    {
        // $user = Socialite::driver('github')->user();

        // // $user->token;

        try {
            $user = Socialite::driver($driver)->user();
        } catch (\Exception $e) {
            return redirect()->route('login');
        }

        $existingUser = User::where('email', $user->getEmail())->first();

        if ($existingUser) {
            auth()->login($existingUser, true);
        } else {


            $newUser = new User;

            $newUser->id = (string) Str::uuid();
            $newUser->name = $user->getName();
            $newUser->email = $user->getEmail();
            $newUser->email_verified_at = now();
            $newUser->avatar = $user->getAvatar();
            $newUser->save();

            $newSocialProfile = new SocialLoginProfile;

            switch ($driver) {
                case 'google':
                    $newSocialProfile->google_id = $user->getId();
                    $newSocialProfile->users_id = $newUser->id;

                    break;

                case 'facebook':
                    $newSocialProfile->facebook_id = $user->getId();
                    $newSocialProfile->users_id = $newUser->id;

                    break;
            }



            $newSocialProfile->save();

            auth()->login($newUser, true);
        }



        return redirect($this->redirectTo);
    }
}

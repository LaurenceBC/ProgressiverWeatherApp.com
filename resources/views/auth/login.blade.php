@extends('layouts.app')

@section('content')

<authenticator login ></authenticator>



{{-- <auth-login
login-route="{{ route('login') }}"
remember-me="{{ old('remember') }}"></auth-login> --}}

@endsection

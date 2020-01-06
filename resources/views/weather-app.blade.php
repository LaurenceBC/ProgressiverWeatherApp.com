@extends('layouts.app')

@section('content')


<weather-app
:userauth='@json(Auth::user() ?? null)'
>
</weather-app>


@endsection

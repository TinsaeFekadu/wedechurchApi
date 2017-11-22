@foreach ($users as $user)
    <li>{!! $user['firstName'] !!} {!! $user['MiddleName'] !!} and with Grand Father name {!! $user['LastName'] !!} </li>

@endforeach


@extends('layouts.app')

@section('content')
    <h1>Users list</h1>
    @if(count($users) > 0)
       @foreach($users as $user)
           <div>

               <h3><a href="/users/{{$user->id}}">{{$user->name}}</a></h3>
           </div>
       @endforeach
    @else
       <p>No posts found</p>
    @endif
@endsection

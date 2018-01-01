<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;

class UsersController extends Controller
{
    public function index()
    {
 /*       $token = JWTAuth::getToken();

        $user = JWTAuth::toUser($token);

        return $user;*/
        return User::all();
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function update($id)
    {
        $user = User::find($id);

        $user -> update();

      //  return 'updated';
        return User::find($id);
    }

    public function delete($id)
    {
       $user = User::find($id);
        $user -> delete();

        return response() -> json(['Deleted!'], 201);
    }


    public function validater($id){
        $user = User::find($id);
        $user -> status = true;
        $status = $user -> update();
       return response() -> json(['user updated' => $status], 201);
    }
}

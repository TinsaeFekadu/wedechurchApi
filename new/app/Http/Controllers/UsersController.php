<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;

class UsersController extends Controller
{
    public function show($id)
    {
       $user = User::find($id);
        return view('admin.users.show')->with('users',$user);
    }

    public function index(){

        $user = User::all();
        return view('admin.users.index')->with('users',$user);



      /* $users = [
            '0' => [
                'firstName' => 'Tinsu',
                'MiddleName' => 'Fekadu',
                'LastName' => 'Getachew'
            ],
            '1' => [
                'firstName' => 'Gech',
                'MiddleName' => 'Amlaku',
                'LastName' => 'Arega'
            ],
            '2' => [
                'firstName' => 'Yite',
                'MiddleName' => 'Gashaw',
                'LastName' => 'Abebe'
            ]
        ];
        return view('admin.users.index', compact('users'));
    */}

    public function create(){
        return view('admin.users.create');
    }

    public function store(Request $request){
        User::create($request->all());
        return 'success';
        return $request->all();
    }




  /*
   public function check(){
        return view('admin.users.check');
    }*/
}

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/users',['uses' => 'UsersController@index']);
Route::get('/users/create',['uses' => 'UsersController@create']);
Route::post('/users',['uses' => 'UsersController@store']);
//Route::resource('/users','UsersController@store');

Route::get('/again', ['uses' => 'UsersController@index']);
Route::get('/again/check',['uses' => 'user_listsController@check']);
Route::post('/again',['uses' => 'user_listsController@submit']);
/*
Route::get('/users', function () {

    $users = [
        '0' => [
            'firstName' => 'Tinsu',
            'MiddleName' => 'Fekadu',
            'LastName' => 'Getachew'
        ],
        '1' => [
            'firstName' => 'Gech',
            'MiddleName' => 'Amlaku',
            'LastName' => 'Arega'
        ]
    ];
    return $users;
});
*/

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

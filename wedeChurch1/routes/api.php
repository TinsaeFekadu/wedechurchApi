<?php

use Illuminate\Http\Request;
use App\Church;
use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*

Route::get('/churchs', function()
{
   return Church::all();
});

Route::get('/churchs/{id}',function($id)
{
    return Church::find($id);
});

Route::post('/churchs',function(Request $request)
{
  //return Church::create($request->all);

    $church=Church::create($request->all());
    return response()->json($church, 201);
});

Route::post('churchs/{id}/update',function(Request $request,$id)
{
    $church = Church::findOrFail($id);
    $church->update($request->all());

    return Church::find($id);
});

Route::post('churchs/{id}/delete',function($id)
{
    Church::find($id)->delete();

        return ('Deleted!!!');
});
*/

Route::get('churchs', 'ChurchsController@index');
Route::get('churchs/{id}', 'ChurchsController@show');
Route::post('churchs', 'ChurchsController@store');
Route::post('churchs/{id}/update', 'ChurchsController@update');
Route::post('churchs/{id}/delete', 'ChurchsController@delete');


Route::get('users', 'UsersController@index');
Route::get('users/{id}', 'UsersController@show');
Route::post('users', 'UsersController@store');
Route::post('users/{id}/update', 'UsersController@update');
Route::post('users/{id}/delete', 'UsersController@delete');



/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

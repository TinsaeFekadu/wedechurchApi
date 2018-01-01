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


//Route::group(['middleware' => 'jwt.auth'], function () {
Route::get('churchs', 'ChurchsController@index');
Route::get('churchs/{id}', 'ChurchsController@show');
Route::post('churchs', 'ChurchsController@store');
Route::post('churchs/{id}/update', 'ChurchsController@update');
Route::post('churchs/{id}/delete', 'ChurchsController@delete');
Route::post('churchs/validate/{id}', 'ChurchsController@validater');
//});

//Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('users', 'UsersController@index');
    Route::get('users/{id}', 'UsersController@show');
    Route::post('users', 'UsersController@store');
    Route::post('users/{id}/update', 'UsersController@update');
    Route::post('users/{id}/delete', 'UsersController@delete');
    Route::post('users/validate/{id}', 'UsersController@validater');
//});


Route::post('/login', ['uses' => 'ApiAuthController@login']);
Route::post('/register', ['uses' => 'ApiAuthController@register']);



Route::group(['middleware' => 'validate_user'], function () {
        Route::get('usersList', 'UsersController@index');
        Route::get('usersList/{id}', 'UsersController@show');
        Route::post('usersList', 'UsersController@store');
        Route::post('usersList/{id}/update', 'UsersController@update');
        Route::post('usersList/{id}/delete', 'UsersController@delete');

});


Route::get('/here', function() {
    return View::make('index');
});
/*

Route::get('/churchs', function()
{

   return Church::all();
}) ;



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


/*Route::get('users', ['middleware' => 'cors', function()
{
    return \Response::json(\App\User::with('id', 'name')->paginate(10), 200);
}]);*/

/*
Route::post('register', 'Auth\RegisterController@register');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

/*
Route::get('/users', function()
{

    return User::all();
}) ->middleware('jwt.auth');

*/


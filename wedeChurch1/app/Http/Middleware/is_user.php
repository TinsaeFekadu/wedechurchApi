<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use JWTAuth;
use Tymon\JWTAuth\Middleware\GetUserFromToken;

class Is_User
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return app(GetUserFromToken::class)->handle($request, function($request) use ($next) {
            $token = JWTAuth::getToken();
            if($token != null){
                $user = JWTAuth::toUser($token);
                if($user != null){
                    $userList = User::where('user_id','=',$user->id)->first();

                    if($userList instanceof User){
                        if($userList->userRole->id <= 2 ){
                            return $next($request);
                        }

                    }
                    return response()->json(['message'=>'Permission Denied'],432);
                }else{
                    return response()->json(['message'=>'Permission denied! User not found'],400);
                }
            }else {
                return response()->json(['error'=>'Permission denied! Token Not Provided'],400);
            }
        });
    }
}
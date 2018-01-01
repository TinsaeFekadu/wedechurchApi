<?php

namespace App\Http\Middleware;

use App\Church;
use Closure;
use JWTAuth;
use Tymon\JWTAuth\Middleware\GetUserFromToken;

class Is_Church
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
                $church = JWTAuth::toUser($token);
                if($church != null){
                    $churchList = Church::where('church_id','=',$church->id)->first();

                    if($churchList instanceof Church){
                        if($churchList->status == true ){
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
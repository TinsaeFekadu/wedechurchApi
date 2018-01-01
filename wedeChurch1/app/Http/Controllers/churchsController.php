<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Church;

class ChurchsController extends Controller
{
    public function index()
    {
        return Church::all();
    }

    public function show($id)
    {

        return Church::find($id);
    }

    public function store(Request $request)
    {
        $church=Church::create($request->all());
        return response()->json($church, 201);
    }

    public function update( $id)
    {

        $church = Church::findOrFail($id);
        $church->update();

        return 'you have successfully updated!!';
        return Church::find($id);
    }


    public function delete( $id)
    {
        Church::find($id)->delete();

        return response() -> json(['Church deleted!']);
    }

    public function validater($id){
        $user = Church::find($id);
        $user -> status = true;
        $status = $user -> update();
        return response() -> json(['Church updated' => $status], 201);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\Contact;

class ContactController extends Controller
{
    //
    public function send(Request $request){
        // $validate = $request->validate([
        //     'mail' => 'required|email',
        //     'fullName' => 'required',
        //     'content' => 'required'
        // ]);
        $validate = Validator::make($request->all(), [
            'mail' => 'required|email',
            'fullName' => 'required',
            'content' => 'required'
        ]);
        if($validate->fails()){
            return ['errors' => $validate->errors()];
        }
        $credentials = $request->all();
        $res = Mail::to("benjamin.rouge@epitech.eu")->send(new Contact($credentials));
        return $res;
    }
    public function validator(){

    }
}

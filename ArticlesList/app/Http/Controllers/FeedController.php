<?php
namespace App\Http\Controllers;

require_once '../../vendor/autoload.php';

use Illuminate\Http\Request;
use Facebook\Facebook;

class FeedController extends Controller
{
    //
    public function connect($api_url){
        $connection_c = curl_init(); // initializing
        curl_setopt( $connection_c, CURLOPT_URL, $api_url ); // API URL to connect
        curl_setopt( $connection_c, CURLOPT_RETURNTRANSFER, 1 ); // return the result, do not print
        curl_setopt( $connection_c, CURLOPT_TIMEOUT, 20 );
        $json_return = curl_exec( $connection_c ); // connect and get json data
        curl_close( $connection_c ); // close connection
        return $json_return; // decode and return
    }
    public function getFeed(){
        $token = "EAATQAhQ59IgBAFfZBCwAGKlElT3fXjFmEmjJwj6lXmzedW00awsyLKsHaI7ZBF2x1tWxP4ed8aOlIyvzwDnGBIca6Tm67aU8bd1oZCvkCEhYZBUpFRkHmL7DwZA67OEJLSPdmXhiZAh35FrKw1UlfFifEIafrAZBX4WiLpIaXTWdgZDZD";
        $feed = $this->connect("https://graph.facebook.com/v4.0/101801624533317/posts?&access_token=$token");
        $pageInfos = $this->connect("https://graph.facebook.com/v4.0/101801624533317?fields=fan_count,cover,name&access_token=$token");
        $pagePicture = $this->connect("https://graph.facebook.com/v4.0/101801624533317/picture?&access_token=$token");
        $res = [
            'picture' => json_decode($pagePicture),
            'infos' => json_decode($pageInfos),
            'feed' => json_decode($feed)
        ];
        return($res);
    }
    public function handle(Request $request){
        return $request->all();
    }
}

<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('articles')->group(function(){
    Route::get('/', 'ArticleController@getAll');
    Route::post('/', 'ArticleController@store')->name('articleStore');
    Route::get('/{id}', 'ArticleController@getOne');
});
Route::prefix('categories')->group(function(){
    Route::get('/', 'CategoriesController@getAll');
    Route::get('/{id}', 'CategoriesController@getArticles');
});
Route::get('/feed', 'FeedController@getFeed');
Route::post('/contact', 'ContactController@send');

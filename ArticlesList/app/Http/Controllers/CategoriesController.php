<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    //
    public function getAll(){
        return Category::all();
    } 
    public function getArticles($id){
        $categorie = Category::where('id', $id)->with('articles')->first();
        return $categorie->articles;
    }
}

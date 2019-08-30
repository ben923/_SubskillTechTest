<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Category;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    //
    public function getAll(){
        return Article::with('category')->paginate(6);
    }
    public function create(){
        $categories = Category::all();
        return view('articles.articleCreate', ['categories' => $categories]);
    }
    public function getOne($id){
        $article = Article::with('category')
        ->where('id', $id)
        ->first();
        $article->IMG = json_decode($article->IMG);
        return $article;
    }
    public function store(Request $request){
        $validateData = $request->validate([
            'title' => 'required|max:150',
            'descript' => 'required',
            'img.*' => 'required|mimes:jpeg,jpg,png',
            'category' => 'required|exists:categories,id'
        ]);
        $article = new Article;
        $article->descript = $request->descript;
        $article->category_id = $request->category;
        $article->title = $request->title;
        $article->IMG = json_encode(self::storeImg($request->file('img')));
        $article->save();
        return view('articles.articleDetails', ['article' => $article])->with('inserted', true);
    }
    static function storeImg($img){
        $path = $img->store('public/ArticlesImage');
        return [str_replace('public', 'storage', $path)];
    }
}

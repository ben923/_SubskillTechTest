<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    protected $table = 'articles';
    public $timestamps = true;
    protected $fillable = [
        'title',
        'descript',
        'IMG',
        'category_id'
    ];

    public function category(){
        return $this->belongsTo('App\Category');
    }
}

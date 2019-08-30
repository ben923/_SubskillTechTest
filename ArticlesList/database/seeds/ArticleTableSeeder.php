<?php

use Illuminate\Database\Seeder;
use App\Article;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $defaultImages = [
        'storage/default.gif',
        'storage/default1.jpg',
        'storage/default2.jpg',
        'storage/default3.jpg',
        'storage/default4.jpg',
    ];
    public function run()
    {
        //
        $faker = Faker\Factory::create('fr_FR');
        for($i = 0; $i < 100; $i++){
            $article = new Article();
            $article->title = $faker->name;
            $article->descript = $faker->text;
            $article->category_id = rand(0, 9);
            $article->IMG = json_encode([$this->defaultImages[rand(0, 3)]]);
            $article->save();
        }
    }
}

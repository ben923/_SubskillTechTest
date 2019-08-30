<?php
use Illuminate\Database\Seeder;
use App\Category;

class CategorySeeder extends Seeder
{
    // List of category you wants to create
    protected $categories = [
        'Sport',
        'Peche',
        'Coquins',
        'Requins',
        'Sneakers',
        'Automobile',
        'Musique',
        'Sape',
        'Sortie',
        'Informatique'
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i = 0; $i < count($this->categories); $i++){
            $category = new Category;
            $category->name = $this->categories[$i];
            $category->save();
        }
    }
}

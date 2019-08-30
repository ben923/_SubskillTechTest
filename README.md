# _SubskillTechTest
Tech test for subskill company
-------------------------------------
# To launch this project you have to follow these step !!!
0. prerequires you must have node(npm) and composer installed on your machine !!
-------------------------------------
1. First of all you have to create database named ArticlesList in Mysql or phpmyadmin
2. Open .env and enter your sql credentials for the app access your database
3. Then Open a terminal and go to ArticlesList folder then run following commands:
    composer install
    composer dump-autoload
    php artisan storage:link
    pho artisan migrate
    php artisan db:seed --class=ArticleTableSeeder
    php artisan db:seed --class=CategorySeeder
    php artisan serve
4. Go to ArticlesView folder and run these commands
    npm i
    npm start

 

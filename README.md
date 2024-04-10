# news simple blog created using laravel 11 + react in laravel breeze

this repo is learn from [Portal News By Dea Afrizal](https://github.com/deaaprizal/laract9-crud-basic-portal-berita) from his youtube ofcourse.

i made this to learn how to mix the laravel with react and also to learn how to use the laravel breeze. after i learn this i will make my own project using this stack. Also i upgrade this stack using laravel 11, the tutorial is using laravel 9.

Big Thanks to [Dea Afrizal](https://github.com/deaaprizal) for the tutorial.

# how to use this repo

create database name laract-news in your mysql database, and then follow this step:

1. clone this repo
2. run `composer install`
3. run `npm install`
4. run `php artisan migrate`
5. run `php artisan db:seed --class=NewsSeeder`
6. run `npm run dev`
7. run `php artisan serve`
8. open your browser and go to `http://localhost:8000`

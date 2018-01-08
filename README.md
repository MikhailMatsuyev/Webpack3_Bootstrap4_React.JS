#npm start #npm run build #npm run build:prod

Create app for saving a search history.
User types query to search input and press "Find".
App makes a query to db Firebase (https://firebase.google.com/) and saves it.
Below input search shows all users's queries in reverse order (first - last query, after - penultimate, etc...).
Query is displayed: "Date-time + query string".
User can delete a query from search history by press button "Delete".
Use only Framework ReactJS + Bootstrap 4 Input and submit through ReactiveForms.

Создать приложение хранения истории поиска.
Пользователь вводит запрос в строку поиска и нажимает «Find».
Приложение делает запрос в базу данных Firebase (https://firebase.google.com/) и сохраняет запрос.
Ниже строки поиска показываются все запросы пользователя в обратном хронологии порядке (скачала последний запрос, потом предпоследний и т.д.).
Запрос показывается в виде «Дата-время + строка запроса».
Пользователь может удалить запрос из истории запросов нажатием на кнопку «Delete».
Приложение должно быть выполнено на Framework ReactJS.
Input и submit с помощью ReactiveForms.
Валидация для поля ввода (не меньше 1 символа и не больше 100).
Для верстки использовать Bootstrap 4.
Для старта проекта необходимо использовать на выбор grunt, gulp, webpack.
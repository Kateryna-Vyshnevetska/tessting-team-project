API для Пети, Саши, Ромы, Сережи
https://rapidapi.com/apidojo/api/tripadvisor1?endpoint=apiendpoint_577cb9a5-776e-43e2-959c-2d52befdb305

Петр:
  1. поиск ресторанов по location_id.
  2. при выборе одного из них - показать информацию о нем
  (local_name, addres, description, email, phone
  top_reasons(header,image), price, web_url)

Саша:
  1. поиск достопримечательностей по location_id.
  2. при выборе одного из них - показать информацию о нем
  (name, location_string, photo(small), web_url, reviews,
  description, address, lowest_price, lowest_ticket_price)

Рома:
  1. поиск отеля по location_id, adults, checkin, rooms, nights.
  2. при выборе одного из них - показать информацию о нем
  (name, address, description, email, hotel_class, price,
  pricing_disclaimer, ranking_geo, web_url)

Сергей:
  1. поиск всех отелей по location_id.
  2. Фильтр отелей по параметрам: pricesmin/pricesmax, hotel_class, order, sort

Катя:
  запрос - fetch('https://randomuser.me/api/')
  1. Создана новая страница randomize.html, подключить к index.html.
  2. При переходе на нее генерируется объект из запроса с такой
    информацией: Name(title, first, last), age, gender, username,
  3. При нажатии на кнопку Login возле этого объекта запросить пароль, и если 
    он совпадет - показать email, phone, picture(medium). 

Андрей:
  запрос - fetch('https://api.themoviedb.org/3/movie/Что-то-там?api_key=7f0b5ab01080cb0bb4b9db0d9bc41efa')

  документация - https://developers.themoviedb.org/3/movies/get-movie-details

  1. Создана новая страница films.html, подключить к index.html.
  2. По нажатию на кнопки:
    получить случайный фильм
    получить список последних добавленных фильмов с инфо о популярности
    получить список популярных фильмов с инфо о популярности
    (должны быть сортированы по популярности от больш. до меньш.) (вкладка movies)
  3. При нажатии на фильм из последних 2-х кнопок - переадресовать на страницу фильма 

Артем:
  Та же документация, как и у Андрея, писать в films.html
  1. Созданы ссылки-табы по жанрам фильмов (вкладка genres), так же есть input для ввода года выпуска фильма
  2. По нажатию на них генерируется список с картинками и описаниями фильмов конкретного жанра (вкладка discover) или по событию change - конкретного года

Тофик:
  1. Создать форму регистрации
  2. Получение из полей имени, емайла, пароля.
  3. Добавление в массив объектов с рандомным id.
  4. Запись в user.json

  https://overcoder.net/q/86689/запись-добавление-данных-в-файл-json-с-использованием-nodejs

  Модуль fs - установлен.
  http://imnotgenius.com/23-rabota-s-fajlami-modul-fs/  

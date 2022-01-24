import { Router } from 'express';
import { Auth_Controller } from '../controllers/auth.controller';
import { Adminka_Controller } from '../controllers/adminka.controller';
import { Home_page_Controller } from '../controllers/home_page.controller';

export const WEBrouter = Router();

//? Внизу - эндпоинты

WEBrouter.get('/adminka', Adminka_Controller.show); //? Админка

WEBrouter.get('/auth', Auth_Controller.show); //? Страница авторизации
WEBrouter.post('/auth_post', Auth_Controller.perform); //? Обработка авторизации POST запрос

WEBrouter.get('/', Home_page_Controller.show);
WEBrouter.post('/home', Home_page_Controller.perform);

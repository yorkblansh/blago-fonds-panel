import { Router } from 'express';

import AuthController from '../controllers/clients/auth.controller';
import { Adminka_Controller } from '../controllers/clients/adminka.controller';
import { Home_page_Controller } from '../controllers/clients/home_page.controller';

const WEBrouter = Router();

WEBrouter.get('/adminka', Adminka_Controller.show); //? Админка

WEBrouter.get('/auth', AuthController.show); //? Страница авторизации
WEBrouter.post('/auth', AuthController.perform); //? Обработка авторизации POST запрос

WEBrouter.get('/', Home_page_Controller.show);

export { WEBrouter };

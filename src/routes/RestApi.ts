import { Router } from 'express';
import { Auth_Controller } from '../controllers/auth.controller';
import { Adminka_Controller } from '../controllers/adminka.controller';
import { Home_page_Controller } from '../controllers/home_page.controller';
import { LogOut_Controller } from '../controllers/logout.controller';
import { ModifyData_Controller } from '../controllers/adminka.controllers/modify.data.controller';
import { RemoveData_Controller } from '../controllers/adminka.controllers/remove.data.controller';
import { CreateData_Controller } from '../controllers/adminka.controllers/create.data.controller';

export const WEBrouter = Router();

//? Внизу - эндпоинты
WEBrouter.get('/adminka', Adminka_Controller.show); //? Админка
WEBrouter.get('/auth', Auth_Controller.show); //? Страница авторизации
WEBrouter.get('/', Home_page_Controller.show);

//? Внизу - api
WEBrouter.post('/auth_post', Auth_Controller.perform); //? Обработка авторизации POST запрос
WEBrouter.post('/home', Home_page_Controller.perform);
WEBrouter.get('/logout', LogOut_Controller.perform);
WEBrouter.post('/modify_data_api', ModifyData_Controller.perform);
WEBrouter.post('/remove_data_api', RemoveData_Controller.perform);
WEBrouter.post('/create_data_api', CreateData_Controller.perform);



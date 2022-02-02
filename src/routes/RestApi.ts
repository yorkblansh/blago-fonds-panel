import { Router } from 'express';
import { Auth_Controller } from '../controllers/auth.controller';
import { Adminka_Controller } from '../controllers/adminka.controller';
import { Home_page_Controller } from '../controllers/home_page.controller';
import { LogOut_Controller } from '../controllers/logout.controller';
import { ModifyData_Controller } from '../controllers/adminka.controllers/modify.data.controller';
import { RemoveData_Controller } from '../controllers/adminka.controllers/remove.data.controller';
import { CreateData_Controller } from '../controllers/adminka.controllers/create.data.controller';
import { Git_Version_Controller } from '../controllers/git_version_controller/git_version_controller';
import { Register_Controller } from 'src/controllers/register.controller';
import { REST_API, PATH } from 'src/consts';

export const WEBrouter = Router();

//? Внизу - эндпоинты
WEBrouter.get(PATH('/adminka'), Adminka_Controller.show); //? Админка
WEBrouter.get(PATH('/auth'), Auth_Controller.show); //? Страница авторизации
WEBrouter.get(PATH('/'), Home_page_Controller.show);

//? Внизу - api

WEBrouter.post(REST_API('/auth_post'), Auth_Controller.perform); //? Обработка авторизации POST запрос
WEBrouter.post(REST_API('/home'), Home_page_Controller.perform);
WEBrouter.get(REST_API('/logout'), LogOut_Controller.perform);
WEBrouter.post(REST_API('/modify_data_api'), ModifyData_Controller.perform);
WEBrouter.post(REST_API('/remove_data_api'), RemoveData_Controller.perform);
WEBrouter.post(REST_API('/create_data_api'), CreateData_Controller.perform);

WEBrouter.post(REST_API('/reg_user_api'), Register_Controller.perform);

WEBrouter.get(REST_API('/get_version'), Git_Version_Controller.show);

import { Router } from 'express'
import { Auth_Controller } from '../app/controllers/auth.controller'
import { Adminka_Controller } from '../app/controllers/adminka.controller'
import { Home_page_Controller } from '../app/controllers/home_page.controller'
import { LogOut_Controller } from '../app/controllers/logout.controller'
import { ModifyData_Controller } from '../app/controllers/adminka.controllers/modify.data.controller'
import { RemoveData_Controller } from '../app/controllers/adminka.controllers/remove.data.controller'
import { CreateData_Controller } from '../app/controllers/adminka.controllers/create.data.controller'
import { Git_Version_Controller } from '../app/controllers/git_version_controller/git_version_controller'
import { Register_Controller } from '../app/controllers/register.controller'
import { REST_API, PATH } from '../../react_frontend/src/api/consts'
import { Favorites_Controller } from '../app/controllers/favorites.controller'
import { Stats_Controller } from '../app/controllers/stats.controller'
import { Keep_Controller } from '../app/controllers/keep.controller'
import { CertainFond_Controller } from '../app/controllers/certain_fond.controller'

export const WEBrouter = Router()

//? Внизу - эндпоинты
WEBrouter.get(PATH('/adminka'), Adminka_Controller.show) //? Админка
WEBrouter.get(PATH('/auth'), Auth_Controller.show) //? Страница авторизации
WEBrouter.get(PATH('/'), Home_page_Controller.show)
WEBrouter.get('/fonds/:name', CertainFond_Controller.show)

//? Внизу - api

WEBrouter.post(REST_API('/auth_post'), Auth_Controller.perform) //? Обработка авторизации POST запрос
WEBrouter.post(REST_API('/home'), Home_page_Controller.perform)
WEBrouter.get(REST_API('/logout'), LogOut_Controller.perform)

WEBrouter.post(REST_API('/modify_data_api'), ModifyData_Controller.perform)
WEBrouter.post(REST_API('/remove_data_api'), RemoveData_Controller.perform)
WEBrouter.post(REST_API('/create_data_api'), CreateData_Controller.perform)

WEBrouter.post(REST_API('/reg_user_api'), Register_Controller.perform)

//лайки
WEBrouter.post(REST_API('/favorites_api'), Favorites_Controller.perform)
WEBrouter.post(REST_API('/add_2_favorite'), Favorites_Controller.add2favorite)
WEBrouter.post(REST_API('/remove_from_favorite'), Favorites_Controller.remove_from_favorite)
WEBrouter.post(REST_API('/get_favorites_names'), Favorites_Controller.get_favorite_org_names)

//закладки
WEBrouter.post(REST_API('/keep_api'), Keep_Controller.perform)
WEBrouter.post(REST_API('/add2keep'), Keep_Controller.add2keep)
WEBrouter.post(REST_API('/remove_from_keep'), Keep_Controller.remove_from_keep)
WEBrouter.post(REST_API('/get_keeped_names'), Keep_Controller.get_keep_org_names)

WEBrouter.post(REST_API('/get_stats'), Stats_Controller.get_stats)

WEBrouter.get(REST_API('/get_version'), Git_Version_Controller.show)

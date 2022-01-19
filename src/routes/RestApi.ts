import { Router } from 'express';

import AuthController from '../controllers/clients/auth.controller';
import { Adminka_Controller } from '../controllers/clients/adminka.controller';
import RegController from '../controllers/clients/home_page.controller';

const router = Router();

router.get('/adminka', Adminka_Controller.show); //? Админка

router.get('/auth', AuthController.show); //? Страница авторизации
router.post('/auth', AuthController.perform); //? Обработка авторизации POST запрос

router.get('/', RegController.show);

export default router;

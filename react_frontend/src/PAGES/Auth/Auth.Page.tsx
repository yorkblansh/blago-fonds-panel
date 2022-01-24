/* eslint-disable react/jsx-pascal-case */
import './auth.page.style.scss';
import { Header_Auth } from './components/header.auth/header.auth';
import { Inputs_Auth } from './components/inputs/inputs.auth';
import { Header_BTN_AUTH } from './components/header.btn/header.btn.auth';

export const AUTH_PAGE = () => {
   return (
      <div className="auth-page">
         <Header_Auth Header_BTN={<Header_BTN_AUTH label="Вернуться на главную" />} />
         <div className="auth-page--form_wrapper">
            <form action="/auth_post" className="formInput--auth" id="vhod" method="POST">
               <Inputs_Auth Label="Логин" input_type="login" />
               <br />
               <br />
               <Inputs_Auth Label="Пароль" input_type="password" />
               <p></p>
            </form>
            <input value="Войти" className="input_type--submit" type="submit" form="vhod" />
         </div>
      </div>
   );
};

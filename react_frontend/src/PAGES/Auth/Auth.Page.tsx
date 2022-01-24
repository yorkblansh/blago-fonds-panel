/* eslint-disable react/jsx-pascal-case */
import './auth.page.style.scss';
import { Inputs_Auth } from './components/inputs/inputs.auth';

export const AUTH_PAGE = () => {
   return (
      <div className="auth-page">
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

/* eslint-disable react/jsx-pascal-case */
import { Account_Input } from 'PAGES/Auth/components/account.inputs/account.inputs';
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn';
import { Header } from 'PAGES/Home_page/components/header/header';
import './register.page.style.scss';

export const REGISTER_PAGE = () => {
   return (
      <div className="register-page">
         <Header reg_or_auth Buttons={[<Header_BTN path="/" label="Вернуться на главную" />]} />
         <div className="register-page--form_wrapper">
            <form action="/auth_post" className="formInput--auth" id="vhod" method="POST">
               <Account_Input path="/register" Label="Логин" input_type="login" />
               <br />
               <br />
               <Account_Input path="/register" Label="Пароль" input_type="password" />
               <p></p>
            </form>
            <input value="Зарегистрировать" className="input_type--submit" type="submit" form="vhod" />
         </div>
      </div>
   );
};

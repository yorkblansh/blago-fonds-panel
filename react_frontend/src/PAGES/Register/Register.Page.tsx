/* eslint-disable react/jsx-pascal-case */
import { Account_Input } from 'PAGES/Auth/components/account.inputs/account.inputs';
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from './components/modules/list.blocks.contract';
import './home.page.style.scss';

export const REGISTER_PAGE = () => {
   //    let { ListBlocks } = ListBlocks_Contract({ path: '/home' });
   return (
      <>
         <div className="auth-page">
            <Header_Register Header_BTN={<Header_BTN_Register label="Вернуться на главную" />} />
            <div className="auth-page--form_wrapper">
               <form action="/auth_post" className="formInput--auth" id="vhod" method="POST">
                  <Account_Input path="/register" Label="Логин" input_type="login" />
                  <br />
                  <br />
                  <Account_Input path="/register" Label="Пароль" input_type="password" />
                  <p></p>
               </form>
               <input value="Войти" className="input_type--submit" type="submit" form="vhod" />
            </div>
         </div>
      </>
   );
};

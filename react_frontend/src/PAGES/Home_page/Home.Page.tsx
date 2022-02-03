/* eslint-disable react/jsx-pascal-case */
import { getAccountProps } from 'app/getAccountProps';
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from './components/modules/list.blocks.contract';
import './home.page.style.scss';

export const HOME_PAGE = () => {
   let { is_authorized } = getAccountProps();
   let { ListBlocks } = ListBlocks_Contract({ path: '/home', is_authorized });

   return (
      <>
         <Header
            Buttons={
               is_authorized
                  ? [
                       <Header_BTN path="/auth" label="Войти в профиль" />,
                       <Header_BTN path="/register" label="Регистрация" />,
                    ]
                  : [<Header_BTN path="/logout" label="Выйти" />]
            }
         />
         <div className="home-page" id="home-page">
            <div className="home-page--wrapper" id="home-page--wrapper">
               {ListBlocks}
            </div>
         </div>
      </>
   );
};

/* eslint-disable react/jsx-pascal-case */
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from './components/modules/list.blocks.contract';
import './home.page.style.scss';

export const HOME_PAGE = () => {
   let { ListBlocks } = ListBlocks_Contract({ path: '/home' });

   return (
      <>
         <Header
            Buttons={[
               <Header_BTN path="/auth" label="Войти в профиль" />,
               <Header_BTN path="/register" label="Регистрация" />,
            ]}
         />
         <div className="home-page" id="home-page">
            <div className="home-page--wrapper" id="home-page--wrapper">
               {ListBlocks}
            </div>
         </div>
      </>
   );
};

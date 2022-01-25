/* eslint-disable react/jsx-pascal-case */
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from './components/modules/list.blocks.contract';
import './home.page.style.scss';

export const HOME_PAGE = () => {
   let { ListBlocks } = ListBlocks_Contract({ path: '/home' });
   return (
      <>
         <Header AuthBtn={<Header_BTN label="Перейти в админку" />} />
         <div className="home-page" id="home-page">
            <div className="home-page--wrapper" id="home-page--wrapper">
               {ListBlocks}
            </div>
         </div>
      </>
   );
};

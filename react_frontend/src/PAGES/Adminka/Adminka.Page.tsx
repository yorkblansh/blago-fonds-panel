/* eslint-disable react/jsx-pascal-case */
import { ListBlocks_Contract } from 'PAGES/Home_page/components/modules/list.blocks.contract';
import { Header_ADM_BTN } from './components/header.adm.btns/header.adm.to_home.btn';
import { HeaderWR_Adminka } from './components/wrapper.header/wrapper.header.adm';
import { WrapperItems } from './components/wrapper.wrapper_items/wrapper_items.adm';

export const ADMINKA_PAGE = () => {
   let { ListBlocks } = ListBlocks_Contract();
   return (
      <div className="adminka">
         <div className="adminka--wrapper">
            <HeaderWR_Adminka
               HomeBtn={<Header_ADM_BTN Label="На главную" />}
               ExitBtn={<Header_ADM_BTN Label="Выйти из админки" />}
            />
            <WrapperItems Items={ListBlocks} />
         </div>
      </div>
   );
};

/* eslint-disable react/jsx-pascal-case */
import './adminka.page.style.scss';
import { ListBlocks_Contract } from 'PAGES/Home_page/components/modules/list.blocks.contract';
import { Header_ADM_BTN } from './components/header.adm.btns/header.adm.to_home.btn';
import { HeaderWR_Adminka } from './components/wrapper.header/wrapper.header.adm';
import { WrapperItems } from './components/wrapper.wrapper_items/wrapper_items.adm';
import { ModalMenus_Contract } from './modules/modal.menus.contract';
import { Add_Item_Btn } from './components/add.item.btn/add.item.btn';
import { useSoftwareVersion } from 'app/hooks/useSoftwareVersion';
import { getAccountProps } from 'app/getAccountProps';

export const ADMINKA_PAGE = () => {
   let { is_authorized } = getAccountProps();
   let { ListBlocks, list } = ListBlocks_Contract({ path: '/adminka', is_authorized });
   let { ModalMenus } = ModalMenus_Contract({ list });
   let { software_version } = useSoftwareVersion();
   return (
      <div className="adminka">
         <div className="adminka--wrapper">
            <HeaderWR_Adminka
               HomeBtn={<Header_ADM_BTN path="/" Label="На главную" />}
               ExitBtn={<Header_ADM_BTN path="/logout" Label="Выйти из админки" />}
            />
            <Add_Item_Btn Label="Добавить новое" />
            <WrapperItems key={'wrapper-items'} Items={ListBlocks} ModalMenus={ModalMenus} />
            <div id="software-version" children={software_version} />
         </div>
      </div>
   );
};

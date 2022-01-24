import { HeaderWR_Adminka } from './components/wrapper.header/wrapper.header.adm';
import { WrapperItems } from './components/wrapper.wrapper_items/wrapper_items.adm';

export const AUTH_PAGE = () => {
   return (
      <div className="adminka">
         <div className="adminka--wrapper">
            <HeaderWR_Adminka HomeBtn={} ExitBtn={} />
            {/* <div className="adminka--wrapper--wrapper_items"> */}
            <WrapperItems Items={} />
            <div className="wrapper_items--item" />
            {/* </div> */}
         </div>
      </div>
   );
};

/* eslint-disable react/jsx-pascal-case */
import { useItemList } from 'app/home_page/hooks/useItemList';
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListItem } from './components/list.items/list.items';
import './home.page.style.scss';

export const HOME_PAGE = () => {
   const { list } = useItemList();
   console.dir(list);
   return (
      <>
         <Header AuthBtn={<Header_BTN label="Перейти в админку" />} />
         <div className="home-page" id="home-page">
            <div className="home-page--wrapper" id="home-page--wrapper">
               {list.map((value, i) => {
                  return (
                     <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
                        <ListItem index={i} value={value.name} />
                        <ListItem index={i} value={value.link1} />
                        <ListItem index={i} value={value.link2} />
                        <ListItem index={i} value={value.info} />
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};

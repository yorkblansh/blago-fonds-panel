/* eslint-disable react/jsx-pascal-case */
import { Ilist, useItemList } from 'app/hooks/useItemList';
import { Item_Config_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn';
import { ListItem } from '../list.item/list.item';

interface IListBlocks_Contract {
   (props: { path: '/home' | '/adminka' }): { ListBlocks: JSX.Element[]; list: Ilist };
}

export const ListBlocks_Contract: IListBlocks_Contract = ({ path }) => {
   const { list } = useItemList();

   let ListBlocks: JSX.Element[] = list.map((value, i) => {
      return (
         <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
            <div className="home-page--wrapper--element--data">
               <ListItem index={i} value={value.name} />
               <ListItem index={i} value={value.link1} />
               <ListItem index={i} value={value.link2} />
               <ListItem index={i} value={value.info} />
            </div>
            {path === '/adminka' && ( //? Если компонент рендериться в админке, то рисуем кнопки
               <div className="home-page--wrapper--element--buttons">
                  <Item_Config_BTN Label="Изменить" index={i} type="modify" />
                  <Item_Config_BTN Label="Удалить" index={i} type="remove" />
               </div>
            )}
         </div>
      );
   });

   return { ListBlocks, list };
};

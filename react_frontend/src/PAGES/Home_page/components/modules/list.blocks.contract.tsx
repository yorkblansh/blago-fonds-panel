/* eslint-disable react/jsx-pascal-case */
import { API, MAIN_PATHES } from '_consts';
import { Ilist, Ilist_elements, useItemList } from 'app/hooks/useItemList';
import { Item_Config_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn';
import { ListItem } from '../list.item/list.item';

interface IListBlocks_Contract {
   (props: { path: keyof typeof API | keyof typeof MAIN_PATHES }): { ListBlocks: JSX.Element[]; list: Ilist };
}

export interface DynObjName {
   [key: string]: Ilist_elements;
}

export const ListBlocks_Contract: IListBlocks_Contract = ({ path }) => {
   const { list } = useItemList();

   let ListBlocks: JSX.Element[] = list.map((value: DynObjName, i) => {
      let [KEY] = Object.keys(value);
      return (
         <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
            <div className="home-page--wrapper--element--data">
               <ListItem Label="Название" index={i} value={value[KEY].name} />
               <ListItem link Label="Ссылка1" index={i} value={value[KEY].link1} />
               <ListItem link Label="Ссылка2" index={i} value={value[KEY].link2} />
               <ListItem Label="Доп. информация" index={i} value={value[KEY].info} />
            </div>
            {path === '/adminka' && ( //? Если компонент рендериться в админке, то рисуем кнопки
               <div className="home-page--wrapper--element--buttons">
                  <Item_Config_BTN Label="Изменить" index={i} type="MODIFY" />
                  <Item_Config_BTN Label="Удалить" index={i} type="REMOVE" />
               </div>
            )}
         </div>
      );
   });

   return { ListBlocks, list };
};

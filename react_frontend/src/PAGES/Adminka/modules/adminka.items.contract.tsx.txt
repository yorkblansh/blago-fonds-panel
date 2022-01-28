import { useItemList } from 'app/hooks/useItemList';
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item';
import { DynObjName } from 'PAGES/Home_page/components/modules/list.blocks.contract';

export const AdminkaItems_Contract = () => {
   const { list } = useItemList();
   const _List = list.map((value: DynObjName, i) => {
      let [KEY] = Object.keys(value);

      <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
         <ListItem index={i} value={value[KEY].name} />
         <ListItem index={i} value={value[KEY].link1} />
         <ListItem index={i} value={value[KEY].link2} />
         <ListItem index={i} value={value[KEY].info} />
      </div>;
   });
};

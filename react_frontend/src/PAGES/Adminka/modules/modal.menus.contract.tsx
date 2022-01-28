/* eslint-disable react/jsx-pascal-case */
import { API, FORM_NAME } from 'api/CONSTS';
import { Ilist } from 'app/hooks/useItemList';
import { DynObjName } from 'PAGES/Home_page/components/modules/list.blocks.contract';
import { Button_Modal } from '../layouts/modal.menus/components/button.modal/button.modal';
import { InputModal } from '../layouts/modal.menus/components/inputs.modal/input.modal';
import { ModalMenu } from '../layouts/modal.menus/modal.menus';

interface IModalMenus_Contract {
   (props: { list: Ilist }): { ModalMenus: JSX.Element[] };
}

export const ModalMenus_Contract: IModalMenus_Contract = ({ list }) => {
   let ModalMenus = list.map((values: DynObjName, index) => {
      let [KEY] = Object.keys(values);
      return (
         <>
            <ModalMenu
               key={'modify-menu'}
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label="Закрыть" modal_type="MODIFY" />}
               SaveBtn={
                  <Button_Modal
                     form="modify_data_form"
                     type="SAVE"
                     index={index}
                     Label="Сохранить"
                     modal_type="MODIFY"
                  />
               }
               InputModal={
                  <div className="modal--input_wrapper">
                     <form name={FORM_NAME.modify_data_form}>
                        <InputModal name="name" Label="Название" value={values[KEY].name} index={index} />
                        <InputModal name="link1" Label="Ссылка1" value={values[KEY].link1} index={index} />
                        <InputModal name="link2" Label="Ссылка2" value={values[KEY].link2} index={index} />
                        <InputModal name="info" Label="Доп. Информация" value={values[KEY].info} index={index} />
                     </form>
                  </div>
               }
               type="MODIFY"
               values={values}
               index={index}
            />
            <ModalMenu
               RemoveModalLabel="Удалить"
               type="REMOVE"
               values={values}
               index={index}
               SaveBtn={<Button_Modal type="SAVE" index={index} Label="Сохранить" modal_type="REMOVE" />}
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label="Закрыть" modal_type="REMOVE" />}
               InputModal={<div></div>}
            />
         </>
      );
   });
   return { ModalMenus };
};

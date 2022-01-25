/* eslint-disable react/jsx-pascal-case */
import { API, FORM_INPUTS, FORM_NAME } from 'api/CONSTS';
import { formSubmit } from 'app/adminka/form.submit';
import { Ilist } from 'app/hooks/useItemList';
import { Button_Modal } from '../layouts/modal.menus/components/button.modal/button.modal';
import { InputModal } from '../layouts/modal.menus/components/inputs.modal/input.modal';
import { ModalMenu } from '../layouts/modal.menus/modal.menus';

interface IModalMenus_Contract {
   (props: { list: Ilist }): { ModalMenus: JSX.Element[] };
}

export const ModalMenus_Contract: IModalMenus_Contract = ({ list }) => {
   let ModalMenus = list.map((values, index) => {
      return (
         <>
            <ModalMenu
               key={'modify-menu'}
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label="Закрыть" modal_type="modify" />}
               SaveBtn={
                  <Button_Modal
                     form="modify_data_form"
                     type="SAVE"
                     index={index}
                     Label="Сохранить"
                     modal_type="modify"
                  />
               }
               InputModal={
                  <div className="modal--input_wrapper">
                     <form
                        name={FORM_NAME.modify_data_form}
                        method="POST"
                        id={FORM_NAME.modify_data_form}
                        action={API.modify_data_api}>
                        <InputModal name="name" Label="Название" value={values.name} index={index} />
                        <InputModal name="link1" Label="Ссылка1" value={values.link1} index={index} />
                        <InputModal name="link2" Label="Ссылка2" value={values.link2} index={index} />
                        <InputModal name="info" Label="Доп. Информация" value={values.info} index={index} />
                     </form>
                     <button form={FORM_NAME.modify_data_form} type="submit">
                        kkkkkk
                     </button>
                  </div>
               }
               type="modify"
               values={values}
               index={index}
            />
            <ModalMenu
               type="remove"
               values={values}
               index={index}
               SaveBtn={<Button_Modal type="SAVE" index={index} Label="Сохранить" modal_type="remove" />}
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label="Закрыть" modal_type="remove" />}
               InputModal={<div></div>}
            />
         </>
      );
   });
   return { ModalMenus };
};

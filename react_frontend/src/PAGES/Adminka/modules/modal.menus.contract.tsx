/* eslint-disable react/jsx-pascal-case */
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
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label={'Закрыть'} modal_type={'modify'} />}
               SaveBtn={<Button_Modal type="SAVE" index={index} Label={'Сохранить'} modal_type={'modify'} />}
               InputModal={
                  <div className="modal--input_wrapper">
                     <InputModal Label={'Название'} value={values.name} />
                     <InputModal Label={'Ссылка1'} value={values.link1} />
                     <InputModal Label={'Ссылка2'} value={values.link2} />
                     <InputModal Label={'Доп. Информация'} value={values.info} />
                  </div>
               }
               type="modify"
               values={values}
               index={index}
            />
            <ModalMenu
               type="remove"
               key={'remove-menu'}
               values={values}
               index={index}
               SaveBtn={<Button_Modal type="SAVE" index={index} Label={'Сохранить'} modal_type={'remove'} />}
               CloseBtn={<Button_Modal type="CLOSE" index={index} Label={'Закрыть'} modal_type={'remove'} />}
               InputModal={<div></div>}
            />
         </>
      );
   });
   return { ModalMenus };
};

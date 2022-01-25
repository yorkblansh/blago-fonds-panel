import './button.modal.style.scss';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';
import { FORM_NAME } from 'api/CONSTS';
import { formSubmit } from 'app/adminka/form.submit';

interface IButton_Modal {
   (props: {
      index: number | string;
      type: 'CLOSE' | 'SAVE';
      modal_type: 'modify' | 'remove';
      Label: string;
      form?: keyof typeof FORM_NAME;
   }): JSX.Element;
}

export const Button_Modal: IButton_Modal = ({ index, type, Label, modal_type }) => {
   if (type === 'SAVE') {
      return (
         <>
            <button
               type="button"
               // form={FORM_NAME.modify_data_form}
               onClick={(e) => {
                  formSubmit(index);
               }}
               className={`modal-btn--${type}`}
               id={`${type}_btn_${index}`}>
               {Label}
            </button>
         </>
      );
   } else if (type === 'CLOSE') {
      return (
         <div
            onClick={() => {
               DisplayModalToogler(index, false, modal_type);
            }}
            className={`modal-btn--${type}`}
            id={`${type}_btn_${index}`}>
            {Label}
         </div>
      );
   } else {
      return <div></div>;
   }
};

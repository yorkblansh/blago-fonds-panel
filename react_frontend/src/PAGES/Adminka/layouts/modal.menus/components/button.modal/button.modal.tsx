import './button.modal.style.scss';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';
import { FORM_NAME, PERF_TYPE } from 'api/CONSTS';
import { perform_data } from 'app/adminka/perform.submit';

interface IButton_Modal {
   (props: {
      index: number | string;
      type: 'CLOSE' | 'SAVE';
      modal_type: keyof typeof PERF_TYPE;
      Label: string;
      form?: keyof typeof FORM_NAME;
   }): JSX.Element;
}

export const Button_Modal: IButton_Modal = ({ index, type, Label, modal_type }) => {
   // if (type === 'SAVE') {
      return (
         <>
            <button
               type="button"
               onClick={(e) => {
                  if (modal_type === 'MODIFY') {
                     perform_data(index, modal_type);
                  } else if (modal_type === 'REMOVE') {
                     perform_data(index, modal_type);
                  }
               }}
               className={`modal-btn--${type}`}
               id={`${type}_btn_${index}`}>
               {Label}
            </button>
         </>
      );
   // }
   // else if (type === 'CLOSE') {
   //    return (
   //       <div
   //          onClick={() => {
   //             DisplayModalToogler(index, false, modal_type);
   //          }}
   //          className={`modal-btn--${type}`}
   //          id={`${type}_btn_${index}`}>
   //          {Label}
   //       </div>
   //    );
   // }
   // else {
   //    return <div> </div>;
   // }
};

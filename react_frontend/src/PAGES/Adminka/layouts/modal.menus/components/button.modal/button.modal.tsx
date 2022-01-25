import './button.modal.style.scss';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';

interface IButton_Modal {
   (props: {
      index: number | string;
      type: 'CLOSE' | 'SAVE';
      modal_type: 'modify' | 'remove';
      Label: string;
   }): JSX.Element;
}

export const Button_Modal: IButton_Modal = ({ index, type, Label, modal_type }) => {
   if (type === 'SAVE') {
      return (
         <div className={`modal-btn--${type}`} id={`${type}_btn_${index}`}>
            {Label}
         </div>
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

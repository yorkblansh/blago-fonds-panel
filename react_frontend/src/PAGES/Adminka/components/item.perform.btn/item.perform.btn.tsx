import './item.perform.btn.style.scss';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';
export interface I_Item_Config_BTN {
   (props: { type: 'modify' | 'remove'; index: number; Label: string }): JSX.Element;
}

export const Item_Config_BTN: I_Item_Config_BTN = ({ type, index, Label }) => {
   return (
      <div
         children={<div>{Label}</div>}
         className="adm-edit-btn"
         onClick={() => {
            DisplayModalToogler(index, true, type);
         }}
      />
   );
};

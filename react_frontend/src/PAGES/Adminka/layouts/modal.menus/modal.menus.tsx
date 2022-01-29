import { PERF_TYPE } from 'api/CONSTS';
import './modal.menus.style.scss';

interface IModalMenu {
   (props: {
      type: keyof typeof PERF_TYPE;
      index: number;
      SaveBtn: JSX.Element;
      CloseBtn: JSX.Element;
      InputModal: JSX.Element;
      RemoveModalLabel?: string;
   }): JSX.Element;
}

export const ModalMenu: IModalMenu = ({ type, index, CloseBtn, SaveBtn, InputModal, RemoveModalLabel }) => {
   let _index;
   if (type === 'MODIFY') {
      _index = index;
   } else if (type === 'CREATE') {
      _index = 'create';
   }
   if (type === 'MODIFY' || type === 'CREATE') {
      return (
         <>
            <div
               id={`modal-perform-menu_${type}_${_index}`}
               style={{
                  display: 'none',
               }}>
               <div className="black-background-opacity" />
               <div className="modal-perform-menu">
                  {InputModal}

                  <div className="modal--btns">
                     {CloseBtn}
                     {SaveBtn}
                  </div>
               </div>
            </div>
         </>
      );
   } else if (type === 'REMOVE') {
      return (
         <>
            <div
               id={`modal-perform-menu_${type}_${index}`}
               style={{
                  display: 'none',
               }}>
               <div className="black-background-opacity" />
               <div className="modal-perform-menu">
                  {/* {InputModal} */}

                  <div className="modal--btns">
                     {RemoveModalLabel}
                     {CloseBtn}
                     {SaveBtn}
                  </div>
               </div>
            </div>
         </>
      );
   } else {
      return <div></div>;
   }
};

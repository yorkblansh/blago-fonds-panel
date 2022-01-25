import './modal.menus.style.scss';

interface IModalMenu {
   (props: {
      type: 'modify' | 'remove' | 'create';
      index: number;
      values: {};
      SaveBtn: JSX.Element;
      CloseBtn: JSX.Element;
      InputModal: JSX.Element;
   }): JSX.Element;
}

export const ModalMenu: IModalMenu = ({ type, index, CloseBtn, SaveBtn, values, InputModal }) => {
   if (type === 'modify' || type === 'create') {
      return (
         <>
            <div
               id={`modal-perform-menu_${type}_${index}`}
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
   } else if (type === 'remove') {
      return <div></div>;
   } else {
      return <div></div>;
   }
};

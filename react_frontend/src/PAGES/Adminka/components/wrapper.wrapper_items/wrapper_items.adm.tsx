export interface IWrapperItems {
   (props: { Items: JSX.Element[]; ModalMenus: JSX.Element[] }): JSX.Element;
}

export const WrapperItems: IWrapperItems = ({ Items, ModalMenus }) => {
   return (
      <>
         <div className="adminka--wrapper--wrapper_items">{Items}</div>
         {ModalMenus}
      </>
   );
};

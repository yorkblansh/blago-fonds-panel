export interface IWrapperItems {
   (props: { Items: JSX.Element[] }): JSX.Element;
}

export const WrapperItems: IWrapperItems = ({ Items }) => {
   return <div className="adminka--wrapper--wrapper_items">{Items}</div>;
};

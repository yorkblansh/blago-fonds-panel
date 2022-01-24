export interface IListItems {
   (props: { index: string | number; value: string }): JSX.Element;
}

export const ListItem: IListItems = ({ index, value }) => {
   return <div className="" key={`item_name_${index}`} id={`item_${index}`} children={value} />;
};

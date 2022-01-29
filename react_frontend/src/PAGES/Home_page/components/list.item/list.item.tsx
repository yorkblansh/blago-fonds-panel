import './list.item.wrapper.style.scss';

export interface IListItem {
   (props: { index: string | number; value: string; Label: string }): JSX.Element;
}

export const ListItem: IListItem = ({ index, value, Label }) => {
   return (
      <div className="list-item--wrapper">
         <div className="list-item--wrapper--label" id={`item_label_${index}`}>
            {Label}
         </div>
         <div className="list-item--wrapper--body" key={`item_name_${index}`} id={`item_${index}`} children={value} />
      </div>
   );
};

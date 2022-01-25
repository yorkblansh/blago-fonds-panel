import './header.adm.to_home.btn.style.scss';

export interface IHeader_ADM_BTN {
   (props: { Label: string }): JSX.Element;
}

export const Header_ADM_BTN: IHeader_ADM_BTN = ({ Label }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = '/';
            }}
            children={<div>{Label}</div>}
            className="adm-header-home_btn"
         />
      </>
   );
};

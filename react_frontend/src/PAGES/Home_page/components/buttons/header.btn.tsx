import { MAIN_PATHES } from 'api/CONSTS';
import './header.btn.style.scss';

interface IHeader_BTN {
   (props: { label: string; type: keyof typeof MAIN_PATHES }): JSX.Element;
}

export const Header_BTN: IHeader_BTN = ({ label, type }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = type;
            }}
            className="header-btn"
            children={<div>{label}</div>}
         />
      </>
   );
};

// const Button = Router(({ history }: { history: string[] }, props: { label: string }) => (
//    <div
//       onClick={() => {
//          history.push('/new-location');
//       }}
//       className="header-btn"
//       children={<div>{props.label}</div>}
//    />
// ));

import { MAIN_PATHES } from '_consts';
import './header.btn.style.scss';

interface IHeader_BTN {
   (props: { label: string; path: keyof typeof MAIN_PATHES }): JSX.Element;
}

export const Header_BTN: IHeader_BTN = ({ label, path }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = path;
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

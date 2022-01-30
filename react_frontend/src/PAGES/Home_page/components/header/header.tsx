import './header.style.scss';

export interface IHeader {
   (props: { AuthBtn?: JSX.Element; RegisterBtn?: JSX.Element; Buttons: JSX.Element[] }): JSX.Element;
}

export const Header: IHeader = ({ AuthBtn, RegisterBtn, Buttons }) => {
   return (
      <div className="header--wrapper" id="header--wrapper">
         {Buttons.map((btn, i) => {
            return <div id={`header--wrapper--element${i}`} children={btn} />;
         })}
      </div>
   );
};

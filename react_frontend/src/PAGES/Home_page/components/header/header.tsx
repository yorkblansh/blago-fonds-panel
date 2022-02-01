import './header.style.scss';

export interface IHeader {
   (props: {
      AuthBtn?: JSX.Element;
      RegisterBtn?: JSX.Element;
      Buttons: JSX.Element[];
      reg_or_auth?: boolean;
   }): JSX.Element;
}

export const Header: IHeader = ({ AuthBtn, RegisterBtn, Buttons, reg_or_auth }) => {
   return (
      <div className={`header--wrapper ${reg_or_auth && 'header--wrapper--pos_absolute'}`} id="header--wrapper">
         {Buttons.map((btn, i) => {
            return <div id={`header--wrapper--element${i}`} children={btn} />;
         })}
      </div>
   );
};

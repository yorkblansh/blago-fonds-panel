import './header.style.scss';

export interface IHeader {
   (props: { AuthBtn?: JSX.Element; RegisterBtn?: JSX.Element; Buttons: JSX.Element[] }): JSX.Element;
}

export const Header: IHeader = ({ AuthBtn, RegisterBtn, Buttons }) => {
   // let _Header = ;
   return (
      <div className="header--wrapper" id="header--wrapper">
         {/* <div id="header--wrapper--element1" />
         <div id="header--wrapper--element2" children={AuthBtn} />
         <div id="header--wrapper--element3" children={RegisterBtn} /> */}
         {Buttons.map((btn, i) => {
            return <div id={`header--wrapper--element${i}`} children={btn} />;
         })}
      </div>
   );
};

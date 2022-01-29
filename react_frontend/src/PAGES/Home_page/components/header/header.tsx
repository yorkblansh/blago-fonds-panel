import './header.style.scss';

export interface IHeader {
   (props: { AuthBtn: JSX.Element; RegisterBtn: JSX.Element }): JSX.Element;
}

export const Header: IHeader = ({ AuthBtn, RegisterBtn }) => {
   return (
      <div className="header--wrapper" id="header--wrapper">
         <div id="header--wrapper--element1" />
         <div id="header--wrapper--element2" children={AuthBtn} />
         <div id="header--wrapper--element3" children={RegisterBtn} />
      </div>
   );
};

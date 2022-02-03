import { MAIN_PATHES } from 'api/consts';
import './header.btn.style.scss';

interface IHeader_BTN {
   (props: { label: string; path: keyof typeof MAIN_PATHES | '/logout' }): JSX.Element;
}

export const Header_BTN: IHeader_BTN = ({ label, path }) => {
   return (
      <>
         <div className="dropdown">
            <button
               onClick={() => {
                  document.location.href = path;
               }}
               className="header-btn dropbtn"
               children={<div>{label}</div>}
            />
            <div className="dropdown-content">
               <a href="#">Выйти</a>
               {/* <a href="#">Ссылка 2</a>
         <a href="#">Ссылка 3</a> */}
            </div>
         </div>
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

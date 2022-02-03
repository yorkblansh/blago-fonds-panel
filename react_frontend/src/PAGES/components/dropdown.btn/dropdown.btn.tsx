import './dropdown.btn.style.scss';

export const DropdownExampleSimple = () => (
   <div className="dropdown">
      <button className="dropbtn">Справа</button>
      <div className="dropdown-content">
         <a href="#">Выйти</a>
         {/* <a href="#">Ссылка 2</a>
         <a href="#">Ссылка 3</a> */}
      </div>
   </div>
);

export const AUTH_PAGE = () => {
   return (
      <div>
         <div>
            <form className="formInput--auth" id="vhod" method="POST">
               {/* <button></button> */}
               <h3 className="nunun">Логин</h3>
               <input type="text" id="login-input" />
               <h3 className="nunun">Пароль</h3>
               <input type="text" id="password-input" />
               <p></p>
            </form>
            <input type="submit" form="vhod" />
         </div>
      </div>
   );
};

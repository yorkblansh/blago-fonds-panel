import './header.btn.style.scss';

export const Header_BTN_AUTH = (props: { label: string }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = '/';
            }}
            className="auth--header-btn"
            children={<div className="auth--header-btn--label">{props.label}</div>}
         />
      </>
   );
};

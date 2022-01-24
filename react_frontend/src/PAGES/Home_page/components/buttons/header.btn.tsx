import './header.btn.style.scss';

export const Header_BTN = (props: { label: string }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = '/adminka';
            }}
            className="header-btn"
            children={<div>{props.label}</div>}
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

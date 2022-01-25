import ReactDOM from 'react-dom';
import './index.scss';
import { AUTH_PAGE } from './PAGES/Auth/Auth.Page';
import { HOME_PAGE } from 'PAGES/Home_page/Home.Page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMINKA_PAGE } from 'PAGES/Adminka/Adminka.Page';

const App = () => {
   return (
      <div>
         <meta charSet="utf-8" />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HOME_PAGE />} />
               <Route path="/auth" element={<AUTH_PAGE />} />
               <Route path="/adminka" element={<ADMINKA_PAGE />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

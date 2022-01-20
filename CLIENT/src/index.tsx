import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import { AUTH_PAGE } from './ROUTES/Auth/Auth.Page';
import { HOME_PAGE } from 'ROUTES/Home_page/Home.Page';

import {
   BrowserRouter,
   // Switch,
   Route,
   Routes,
   // Link,
   // useRouteMatch,
   // useParams
} from 'react-router-dom';

const App = () => {
   return (
      <div>
         <div>
            <button></button>
         </div>
         {/* <meta charSet="utf-8" />

         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HOME_PAGE />} />
               <Route path="/auth" element={<AUTH_PAGE />} />
            </Routes>
         </BrowserRouter> */}
      </div>
   );
};
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

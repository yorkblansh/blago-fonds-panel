import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AUTH_PAGE } from './ROUTES/Auth/Auth.Page';

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
         <meta charSet="utf-8" />

         <BrowserRouter>
            <Routes>
               <Route path="/auth" element={<AUTH_PAGE />} />
               {/* <Route path="/adminka" element={<ADMINKA_PAGE />} />
               <Route path="/" element={<HOME_PAGE />} /> */}
            </Routes>
         </BrowserRouter>
      </div>
   );
};
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

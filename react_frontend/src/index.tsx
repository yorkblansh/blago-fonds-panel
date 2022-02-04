import ReactDOM from 'react-dom';
import './index.scss';
import { AUTH_PAGE } from './PAGES/Auth/Auth.Page';
import { HOME_PAGE } from 'PAGES/Home_page/Home.Page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMINKA_PAGE } from 'PAGES/Adminka/Adminka.Page';
import { PATH } from 'api/consts';
import { REGISTER_PAGE } from 'PAGES/Register/Register.Page';
import { FAVORITES_PAGE } from 'PAGES/Favorites/Favorites.Page';

const App = () => {
	return (
		<div>
			<meta charSet="utf-8" />
			<BrowserRouter>
				<Routes>
					<Route path={PATH('/')} element={<HOME_PAGE />} />
					<Route path={PATH('/auth')} element={<AUTH_PAGE />} />
					<Route path={PATH('/adminka')} element={<ADMINKA_PAGE />} />
					<Route path={PATH('/register')} element={<REGISTER_PAGE />} />
					<Route path={PATH('/favorites')} element={<FAVORITES_PAGE />} />
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

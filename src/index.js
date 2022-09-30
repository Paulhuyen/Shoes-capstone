import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HeaderHome from './components/HeaderHome/HeaderHome';
import { store } from './redux/configStore';
import Login from './pages/Login/Login';
// import LoginFacebook from './pages/Login/LoginFacebook';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail.jsx/ProductDetail';
import { Provider } from 'react-redux';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Search from './pages/Search/Search';
import Carts from './pages/Carts/Carts';
import Profile from './pages/Profile/Profile';
//History
export const history = createBrowserHistory({window})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <HistoryRouter history={history}>
    <Routes>
      <Route path='' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='cart' element={<Carts/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='detail' >
            <Route path=':id/:name' element={<ProductDetail />} ></Route>
        </Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

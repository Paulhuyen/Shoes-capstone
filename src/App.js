import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderHome from './components/HeaderHome/HeaderHome';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeaderHome/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

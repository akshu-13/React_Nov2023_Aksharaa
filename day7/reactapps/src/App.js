import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>  
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
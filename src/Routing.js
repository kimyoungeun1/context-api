import { BrowserRouter, Route, Routes } from 'react-router-dom';
import'./App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';

function Routing() {
   return(
   <div className=" Routing">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
    </Routes>

    </BrowserRouter>
   </div>
   );
}

export default  Routing;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";

const Layout = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

export default Layout;
import {Route, Router, Routes} from 'react-router-dom'
import About from "./components/About";
import Home from "./components/Home/Home";

import Navbar from "./components/NavBar";


function App() {

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>

        </div>
    );
}


export default App;

import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Navbar from "./components/Navbar/Navbar"

export default function App(){
    

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />}></Route> 
            </Routes> 
            
            
        </div>
    )
}
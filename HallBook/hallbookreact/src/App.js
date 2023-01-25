import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Navbar from "./components/Navbar/Navbar"

export default function App(){
    

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Error />}></Route> 
            </Routes> 
            
            
        </div>
    )
}
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";


function App()
{
    const [users,setusers] = useState([
        {
            username:"sathish",
            password:"2811"
        },
        {
            username:"tsk",
            password:"123"
        }

    ])

    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
                <Route path='/Signup' element={<Signup users={users} setusers={setusers} />}></Route> 
                <Route path='/Landing' element={<Landing />}></Route>     
            </Routes>
       </BrowserRouter>
    </div >
    )
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState()

    const users = props.users
    var userfound = true
    function handleUinput(evt)
    {
        setEusername(evt.target.value)

    }
    function handleUoutput(evt)
    {
        setEpassword(evt.target.value)

    }
    function checkuser()
    {
        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {
                console.log("Login Successful")
                userfound = true
                navigate ("/Landing", { state:{ user: eusername } })
            }
        })
        if (userfound === false)
        {
            console.log("Login Failed")
            setRuser(false)
        }
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3x1 font-medium">Hey Hi</h1>
                {ruser? <p>I help you manage your activities after you login :)</p>:<p>Please sign up </p>}

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUinput}></input>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handleUoutput}></input>
                </div>

                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>

                <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login;
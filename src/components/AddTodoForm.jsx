import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivity] = useState("")

    function handleChange(evt)
    {
        setnewactivity(evt.target.value)
    }

    function Addactivity()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    }

    return(
        <div className="flex flex-col gap-3">
                    <h1 className="text-2x1 font-medium">Manage Activities</h1>

                    <div>
                        <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                        <button onClick={Addactivity} className="text-white bg-black p-1 border border-black">Add</button>
                    </div>
                </div>
    )
}

export default AddTodoForm;
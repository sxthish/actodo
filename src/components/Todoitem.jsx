function Todoitem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleChange(deleteid)
    {
        var temparr = activityArr.filter(function(item)
        {
            if(item.id === deleteid)
            {
                return false
            }else{
                return true
            }
        })

        setactivityArr(temparr)
    }

    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handleChange(props.id)}>Delete</button>
        </div>
    )
}

export default Todoitem
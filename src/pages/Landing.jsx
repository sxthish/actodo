import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router"

function Landing()
{
    const data = useLocation()
    return (
        <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md flex-wrap">
        {/* HEader */ }
        <Header username={data.state.user}/>
        {/* Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">

          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"}/>
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>

        </div>
        {/* TodoContainer */}
        <TodoContainer />

      </div>
    </div>
    )
}

export default Landing
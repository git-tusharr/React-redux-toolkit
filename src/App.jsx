import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";

const App =()=>{

    const currentColor=useSelector((state)=>state.myColor.color);
    const dispatch=useDispatch();

    return(
        <>
        <h1>This is App component</h1>


        <div style={{width:"500px", height:"200px", backgroundColor:currentColor}}>

        </div>

        <br /><br />
        <button onClick={()=>dispatch(colorChange())}>click here</button>
        
        </>
    )
}

export default App;
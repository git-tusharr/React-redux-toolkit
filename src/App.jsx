import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";

const App =()=>{
    

    const [textVal,setTxtVal]=useState("");
    const myTask=useSelector((state)=>state.mytodo.task);
    const dispatch=useDispatch();

    let sno=0;
    const ans=myTask.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.work}</td>
            </tr>
            </>
        )
    })

    console.log(myTask);

    return(
        <>
        <h1>This is Todo-list App </h1>

        <hr />
        <br />

            Enter Your task : <input type="text" value={textVal} onChange={(e)=>{setTxtVal(e.target.value)}} />  
            <button onClick={()=>{dispatch(addTask({id:Date.now(),work:textVal}))}}>Add</button>   
        <br />
        <br />
        <hr />
        
        <table style={{border:"solid 1px"}}>
            <tr>
                <th>Sno</th>
                <th>Your Task</th>
            </tr>
            {ans}
        </table>


        </>
    )
}

export default App;
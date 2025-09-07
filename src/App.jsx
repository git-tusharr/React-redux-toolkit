import { useSelector,useDispatch } from "react-redux";
import { addTask,taskDelete,taskComplete,taskInComplete,editTaskSave} from "./todoSlice";
import { useState } from "react";

const App =()=>{
    

    const [textVal,setTxtVal]=useState("");
    const myTask=useSelector((state)=>state.mytodo.task);
    const dispatch=useDispatch();

    const [btnStatus,setBtnStatus]=useState(true);
    const [myid,setMyId]=useState("");

    const taskEdit=(id,work)=>{
        setMyId(id)
        setTxtVal(work);
        setBtnStatus(false);
    }

    const myEditSave=()=>{
        dispatch(editTaskSave({id:myid,newTask:textVal}))
        setBtnStatus(false);
        setTxtVal("");
    }

    let sno=0;
    const ans=myTask.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>

                <td>
                    {key.status ?(<>
                    <span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>
                    </>):(<>
                    {key.work}
                    </>)}
                </td>

                <td>
                    <button onClick={()=>{dispatch(taskDelete({id:key.id}))}}>Delete</button>
                </td>

                <td>
                    <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
                </td>

                <td>
                    <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>Incomplete</button>
                </td>
                <td>
                    <button onClick={()=>{taskEdit(key.id,key.work)}}>Edit</button>
                </td>

            </tr>                                                          
            </>
        )
    })


    return(
        <>
        <h1>This is Todo-list App </h1>

        <hr />
        <br />



            Enter Your task : <input type="text" value={textVal} onChange={(e)=>{setTxtVal(e.target.value)}} />  

            {btnStatus ?(<>
                  <button onClick={()=>{dispatch(addTask({id:Date.now(),work:textVal,status:false}))}}>Add</button>
                </>):(<>
                <button onClick={myEditSave}>Edit Save</button>  
            </>)}
        <br />
        <br />
        <hr />
        
        <table style={{border:"solid 1px"}}>
            <tr>
                <th>Sno</th>
                <th>Your Task</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            {ans}
        </table>


        </>
    )
}

export default App;
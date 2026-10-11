import { useReducer, useState } from "react";


const initialStudents =[
  { id: "s1", name: "Arun", score: 85, status: "Active" },
  { id: "s2", name: "Priya", score: 92, status: "Active" },
  { id: "s3", name: "Kumar", score: 76, status: "Inactive" }
];
  

    const reducer=(state,action)=>{
        
     switch(action.type){
        case "SCORE_UPDATE" :{
            return state.map(student => student.id === action.payload.id ? {...student,score:action.payload.score} : student)
        }
        case "RESET_SCORE" :{
          return state.map(student => (
            student.id === action.payload.id ? {...student,score:0} : student
          ))
        }
        case "TOGGLE_CHANGE" :{
          return state.map(student => (
            student.id === action.payload.id ? {...student,status:student.status ==="Active" ? "Inactive" : "Active" } :student
          ))
        }
        default:
          return state;
        }
  }


const StudentProgressTracker = () => {


const [state, dispatch] = useReducer(reducer, initialStudents);

const [newScore,setNewScore]=useState(null)

  return (
    <div>
       {state.map(student => (
         
         <div>
        <h3>Name-{student.name}</h3>
        <h3>Score-{student.score}</h3>
        <h3>Status-{student.status}</h3>
        <label>Update Score : </label> <input onChange={(e)=>{setNewScore(e.target.value)}} ></input>
        <button onClick={()=>dispatch({type:"SCORE_UPDATE" ,payload:{id:student.id,score:newScore}})} >Update</button>
        <button onClick={()=>dispatch({type:"RESET_SCORE",payload:{id:student.id}})} >Reset</button>
        <button onClick={()=>dispatch({type:"TOGGLE_CHANGE",payload:{id:student.id}})} >Toggle</button>
         </div>

     ))}
      
    </div>
  )
}

export default StudentProgressTracker
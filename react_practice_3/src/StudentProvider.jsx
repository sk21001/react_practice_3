import { createContext, useReducer } from "react"


const intialStudents =[
  { id: "s1", name: "Arun", score: 85, status: "Active" },
  { id: "s2", name: "Priya", score: 92, status: "Active" },
  { id: "s3", name: "Kumar", score: 76, status: "Inactive" }
]

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



export const studentContext=createContext(intialStudents)

export const StudentContextProvider=({children})=>{

const [students,dispatch]=useReducer(reducer,intialStudents)


return <studentContext.Provider value={{students,dispatch}} >{children}</studentContext.Provider>
}
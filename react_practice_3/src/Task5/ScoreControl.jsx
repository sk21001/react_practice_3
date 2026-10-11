import { studentContext } from '../StudentProvider'
import { useContext,useState } from 'react'

const ScoreControl = () => {

const {students,dispatch}=useContext(studentContext)

const [score,setScore]=useState(null)

  return (
    <>
    {students.map(student=>(
        <div>
            <h2>{student.name}</h2>
            <input onChange={(e)=>{setScore(e.target.value)}} ></input>
            <button onClick={()=>{dispatch({type:"SCORE_UPDATE",payload:{id:student.id,score:score}})}} >Update</button>
        </div>
    ))}
    </>
  )
}

export default ScoreControl
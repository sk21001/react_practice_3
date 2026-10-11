import { useContext } from "react"
import { studentContext } from "../StudentProvider"


const StudentSummary = () => {

  const {students}=useContext(studentContext)

  const average=students.reduce((sum,student)=>{
    return  sum + student.score/students.length
},0)

  return (
    <div>
        <h1>This is StudentSummary component</h1>
        <h2>Total Number of Students : {students.length}</h2>
        <h2>Average : {average.toFixed(1)}</h2>
    </div>
  )
}

export default StudentSummary
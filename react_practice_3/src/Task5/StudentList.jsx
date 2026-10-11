import {useContext} from 'react'
import { studentContext } from '../StudentProvider'

const StudentList = () => {

    const{students}=useContext(studentContext)

  return (
    <>
    {students.map(student => (
        <div>
        <h2>Name : {student.name}</h2>
        <h2>Score : {student.score}</h2>
        <h2>Status : {student.status}</h2>
    </div>
     ))}
    </>
  )
}

export default StudentList
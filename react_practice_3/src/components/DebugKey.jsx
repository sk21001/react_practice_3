import { useState } from "react"




const StudentDeatils=({name})=>{
    return(
     <h1 style={{color:"red"}} >{name}</h1>
    )

}
const DebugKey = () => {

    const [students,setStudents]=useState([
    {id:'s1',name:"Tony"},
    {id:"s2",name:"Rogers"},
    {id:"s3",name:"Bruce"},
    {id:"s4",name:"stephen"}
])


    const [newName,setNewName]=useState('')

    const handleInput=(e)=>{
        e.preventDefault()
        setStudents([{name:newName,id:Date.now()},...students])
    }

  return (
    <>
    {students.map((student)=>(
        <div key={student.id}>
        <input type="checkbox"></input>
        <StudentDeatils  name={student.name} />
        </div>
    ))}
    <form onSubmit={handleInput} >
    <input type="text" onChange={(e)=>{setNewName(e.target.value)}}  ></input>
    <button type="submit" >Add</button>
    </form>
      </>
  )
}

export default DebugKey
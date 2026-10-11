import StudentCard from "./StudentCard"


const StudentList = () => {

    const studentDetails=[
        {id:1,title:'title1',child:'child1'},
        {id:3,title:'title2',child:'child2'},
        {id:3,title:'title3',child:'child3'}

    ]

  return (
    studentDetails.map((student)=>{
 
        return(
         <StudentCard  key={student.id} title={student.title} child={student.child} /> 
        )

    })
    
  )
}

export default StudentList
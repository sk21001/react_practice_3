
import StudentList from "./Task5/StudentList"
import StudentSummary from "./Task5/StudentSummary"
import { StudentContextProvider } from "./StudentProvider"




const App = () => {
  return (
    <>
     <StudentContextProvider>
        <StudentList/>
        <StudentSummary/>
     </StudentContextProvider>

      
  
    </>
  )
}

export default App

import StudentList from "./Task5/StudentList"
import StudentSummary from "./Task5/StudentSummary"
import { StudentContextProvider } from "./StudentProvider"
import ScoreControl from "./Task5/ScoreControl"




const App = () => {
  return (
    <>
     <StudentContextProvider>
        <StudentList/>
        <StudentSummary/>
        <ScoreControl/>
     </StudentContextProvider>
   </>
  )
}

export default App
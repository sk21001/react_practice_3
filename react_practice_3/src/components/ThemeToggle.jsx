import {useContext} from 'react'
import { AppContext } from '../context'

const Toggle = () => {

  const initialState= useContext(AppContext)

  return (
    <div>
        <h1>CohortName : {initialState.cohortName}</h1>
        <h1>Theme : {initialState.theme}</h1>
    </div>
  )
}

export default Toggle
import {createContext} from 'react';

 const initalState={
    cohortName:"Cohort_201",
    theme:"dark"
}

export const AppContext=createContext(initalState)

export const AppContextProvider = ({children}) => {

return <AppContext.Provider value={initalState} >
    {children}
  </AppContext.Provider>
}
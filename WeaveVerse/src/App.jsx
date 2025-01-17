import React from "react"
import AuthContextProvider from "./context/AuthContextProvider.jsx"
import LogIn from "./Components/LogIn"






function App() {
  

  return (
    <>
   <AuthContextProvider>
      <LogIn />
    </AuthContextProvider>
    </>
    
  )
}

export default App

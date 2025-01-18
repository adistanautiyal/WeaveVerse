import React from "react"
import AuthContextProvider from "./context/AuthContextProvider.jsx"
import LogIn from "./Components/LogIn";
import { BrowserRouter ,Routes , Route} from "react-router-dom";

import LandingPage from "./Pages/LandingPage.jsx";







function App() {
  

  return (
    <>
   <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/" element={<LandingPage/>}/>

    </Routes>
      
      </BrowserRouter>
    </AuthContextProvider>
    </>
    
  )
}

export default App

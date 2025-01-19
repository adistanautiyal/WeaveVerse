import React from "react"
import AuthContextProvider from "./context/AuthContextProvider.jsx"
import LogIn from "./Components/LogIn";
import { BrowserRouter ,Routes , Route} from "react-router-dom";

import LandingPage from "./Pages/LandingPage.jsx";
 import { useState } from "react";
 import ProtectedRoute from "./Components/ProtectedRoute.jsx";
 import Story from './Pages/Story.jsx';
 import Contact from "./Pages/Contact.jsx";
 import Home from "./Pages/Home.jsx";







function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  

  return (
    <>
    
   <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/story" element={<Story/>}/>
      <Route path="/contact" element={<Contact/>}/>
       <Route path="/start-reading" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/write" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/get-Started" element={<ProtectedRoute><Home/></ProtectedRoute>}/>


     </Routes>
      
      </BrowserRouter>
    </AuthContextProvider>
    </>
    
  )
}

export default App

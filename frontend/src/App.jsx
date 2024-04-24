import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
   <>
  <div div className="dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
    <Route path="/signup" element={<Signup />} />
   </Routes>
   <Toaster />
  </div>
  
</>
)
};

export default App

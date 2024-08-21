import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useAuth } from "@clerk/clerk-react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const {isSignedIn} = useAuth();
  console.log('Is Signed: ',isSignedIn)

  useEffect(() => {
     if (isSignedIn) {
         if (location.pathname === "/login" || location.pathname === "/signup"){
        navigate("/");
         }
    }else{
      navigate("/login");
    }
  

  }, [isSignedIn, location.pathname]);

  return (
    <>
      <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/' element={<Home/>}/>
      </Routes>

    </>
  );
}

export default App;


import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
     if (isSignedIn && location.pathname !== '/'){
        navigate("/");
    }
    if(!isSignedIn && location.pathname === '/'){
      navigate("/login");
    }
    if(!isSignedIn && location.pathname === '/signup') return;
  

  }, [isSignedIn, location.pathname]);

  return (
    <>
      <Routes>
      <Route path="/signup" element={ !isSignedIn ? <Signup /> : <Navigate to='/' />}/>
      <Route path="/login" element={!isSignedIn ? <Login /> : <Navigate to='/' />}/>
      <Route path='/' element={isSignedIn ? <Home/> : <Navigate to='/login' />}/>
      </Routes>

    </>
  );
}

export default App;


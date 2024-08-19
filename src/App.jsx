import { Route } from 'express';
import './App.css'
import  Home from './Pages/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home/>}/>
  </>
  )


)


function App() {

  return (
    <>
    <Home />
    </>
  )
}

export default App

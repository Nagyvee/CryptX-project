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
    <h1>hellow</h1>
    </>
  )
}

export default App

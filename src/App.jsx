import { Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;




import React from 'react'
import {BrowserRouter , Routes , Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import Loggedin from './pages/LoggedIn/Loggedin'

const myRouter = createBrowserRouter([
  {path:'', element:<Home/> },
  {path:'/login'  ,element:<Loggedin/>},
  {path:'/signUp', element:<SignUp/> },
  {path:'/createBlog', element:<CreateBlog/> },




])

const App = () => {
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  )
}

export default App

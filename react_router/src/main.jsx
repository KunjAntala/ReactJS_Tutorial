import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

// (Method - 1)
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='user/:userid' element={<User/>}/>
      {/* <Route loader={githubInfoLoader} path='github' element={<Github/>}/> */}
    </Route>
  )
)

// (Method - 2)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element : <Home/>
//       },
//       {
//         path: 'about',
//         element: <AboutUs/>
//       },
//       {
//         path: 'contact',
//         element: <ContactUs/>
//       },
//       {
//         path: 'github',
//         element: <Github/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

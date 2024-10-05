import  React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './store/store.js';
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route } from 'react-router-dom'
import LooginPage from './components/LooginPage.jsx'
import Login from './components/Login.jsx'
import PostsPage from './pages/PostsPage.jsx';
import Layout from './components/Layout.jsx'
import SideBar from './components/SideBar.jsx';
import Home from './pages/Home.jsx';
import SignUp from './components/SignUp.jsx';
import AboutUs from './components/AboutUs.jsx';
import Profile from './components/Profile.jsx';
import More from './pages/More.jsx';
import Notify from './pages/Notify.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     elememt: <LooginPage/>,
//     children:[
//       {
//         path:'/login',
//         elememt: <Formm/>
//       },
//       {
//         path: '/home',
//         elememt:<Home/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element={<SignUp/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='more' element={<More/>}/>
      <Route path='notification' element={<Notify/>}/>
     
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

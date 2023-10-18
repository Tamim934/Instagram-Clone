import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import UserProfile from './pages/userprofile/UserProfile'
import Explore from './pages/explore/Explore'
import Reels from './pages/reels/Reels'
import Messages from './pages/messages/Messages'
import Profile from './pages/profile/Profile'
import NotFound from './pages/notfound/NotFound'

function App() {

  const isRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "userprofile",
          element: <UserProfile/>
        },
        {
          path: "explore",
          element: <Explore/>
        },
        {
          path: "reels",
          element: <Reels/>
        },
        {
          path: "messages",
          element: <Messages/>
        },
        {
          path: "profile",
          element: <Profile/>
        }
      ],
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  return <RouterProvider router = {isRouter}/>
}

export default App
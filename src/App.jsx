import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Reels from './pages/reels/Reels'
import Messages from './pages/messages/Messages'
import Profile from './pages/profile/Profile'
import NotFound from './pages/notfound/NotFound'
import SearchProfile from "./pages/searchProfile/SearchProfile"
import Login from "./pages/Login/Login"

function App() {

  const isRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,

        },
        {
          path: "searchprofile",
          element: <SearchProfile />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "reels",
          element: <Reels />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "profile",
          element: <Profile />,
        },

      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={isRouter} />
}

export default App
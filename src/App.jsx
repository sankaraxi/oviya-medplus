import { createBrowserRouter, Outlet } from "react-router-dom"
import { Services } from "./components/Services"




const App = () => {
    return (
        <div className="">
          <Outlet />
        </div>
    )
  }

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/Services",
        element: <Services />,
      },
    ] 
  }
])
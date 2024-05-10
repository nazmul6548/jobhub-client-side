import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error/Error";
import Root from "./root/Root";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
  
      ]
    },
  ]);

export default router;
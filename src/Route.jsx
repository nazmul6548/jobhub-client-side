import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error/Error";
import Root from "./root/Root";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
  
      ]
    },
  ]);

export default router;
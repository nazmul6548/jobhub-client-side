import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error/Error";
import Root from "./root/Root";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import AddJob from "./pages/AddJob";
import MyJob from "./pages/MyJob";
import UpdateJob from "./pages/UpdateJob";
import Blog from "./pages/Blog";
import PrivateRoute from "./component/PrivateRoute";
import AllJob from "./pages/AllJob";
import AppliedJob from "./pages/AppliedJob";
import Review from "./pages/Review";


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
        },
        {
          path:"/job/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:"/addjob",
          element:<AddJob></AddJob>
        },
        {
          path:"/mypostjob",
          element:<MyJob></MyJob>
        },
        {
          path:"/updatejob/:id",
          element:<UpdateJob></UpdateJob>,
          loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:"/blog",
          element:<Blog></Blog>

        },
        {
          path:"/alljob",
          element:<AllJob></AllJob>
        },
        {
          path:"/applied",
          element:<AppliedJob></AppliedJob>,
          
        },
        {
          path:"/review",
          element:<Review></Review>
        }
  
      ]
    },
  ]);

export default router;
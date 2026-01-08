import Browse from "./Browse.jsx";
import Error from "./Error.jsx";
import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ofline from "./Ofline.jsx";
import useCheckOnlineStatus from "../CustomHooks/useCheckOnlineStatus.js";
import MovieInfo from "./MovieInfo.jsx";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    
        
  ]);

  const onlineStatus = useCheckOnlineStatus();
 

  return (
    <div>
      {onlineStatus? <RouterProvider router={appRouter} />: <Ofline />}      
    </div>
  );
};

export default Body;

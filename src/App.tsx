import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Congratulations from "./pages/Congratulations";
import Waitlist from "./pages/Waitlist";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/join_waitlist",
      element: <Waitlist />,
    },
    {
      path: "/suscribed",
      element: <Congratulations />,
    }
  ]);
  return (

    <RouterProvider router={router} />


  )
}

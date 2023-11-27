import { RouterProvider } from "react-router-dom";
import  "../src/style.css"
import routes from "./Router";

export default function App () {
  return ( <RouterProvider router={routes}/>
  )
}
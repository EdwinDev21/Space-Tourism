import { createBrowserRouter } from "react-router-dom";
import ContentDisplay from "../components/ContentDisplay";
import Home from "./Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Destination", element: <ContentDisplay /> },
]);

export default router;

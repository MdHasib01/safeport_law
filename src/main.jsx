import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);

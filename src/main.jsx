import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Registration from "./pages/Registration";
import PrivateRoutes from "./hooks/PrivateRoutes";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/register",
    Component: Registration,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/chat/:token",
    Component: Chat,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/chat",
        Component: Chat,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="bottom-right" />
    <RouterProvider router={route} />
  </Provider>
);

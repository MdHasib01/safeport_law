import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
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
    element: <PrivateRoutes />,
    children: [
      {
        path: "/chat",
        Component: Chat,
      },
      {
        path: "/chat/:token",
        Component: Chat,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
);

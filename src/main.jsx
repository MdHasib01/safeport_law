import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
);

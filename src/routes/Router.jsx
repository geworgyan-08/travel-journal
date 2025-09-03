import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "../component/ProtectedRoute";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const MyJournal = lazy(() => import("../pages/MyJournal"));
const AddTrip = lazy(() => import("../pages/AddTrip"));



 export const  Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/my-journal",
    element: (
      <ProtectedRoute>
        <MyJournal />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-trip",
    element: (
      <ProtectedRoute>
        <AddTrip />
      </ProtectedRoute>
    ),
  },
]);

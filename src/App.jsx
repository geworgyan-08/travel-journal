import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MyJournal } from "./pages/MyJournal";
import { AddTrip } from "./pages/AddTrip";
import { ProtectedRoute } from "./component/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
          path="/my-journal"
          element={
            <ProtectedRoute>
              <MyJournal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-trip"
          element={
            <ProtectedRoute>
              <AddTrip />
            </ProtectedRoute>
          }
        />
    </Routes>
  );
}

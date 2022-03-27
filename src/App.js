import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />}>
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
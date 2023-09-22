import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import AgvControl from "../AgvControl";
import Dashboard from "../Dashboard";
import SignUp from "../SignUp";

function Layout() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agv" element={<AgvControl />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Layout;

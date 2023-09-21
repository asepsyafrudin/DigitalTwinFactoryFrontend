import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import AgvControl from "../AgvControl";
import Dashboard from "../Dashboard";

function Layout() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agv" element={<AgvControl />} />
      </Routes>
    </div>
  );
}

export default Layout;

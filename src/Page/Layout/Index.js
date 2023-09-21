import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import AgvControl from "../AgvControl";

function Layout() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/agv" element={<AgvControl />} />
      </Routes>
    </div>
  );
}

export default Layout;

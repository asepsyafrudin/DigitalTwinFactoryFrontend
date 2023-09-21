import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import AgvControl from "../AgvControl";
import Frame from "../../Component/Frame";

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<Login />} />
          <Route path="/agv" element={<AgvControl />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Layout;

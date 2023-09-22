import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import AgvControl from "../AgvControl";
import Dashboard from "../Dashboard";
import SignUp from "../SignUp";
import Ekanban from "../Ekanban";
import EnergyControl from "../EnergyControl";
import EReceiving from "../EReceiving";
import ERO from "../ERO";
import EStaging from "../EStaging";
import LeaderControl from "../LeaderControl";
import SOPDX from "../SOPDX";
import Traceability from "../Traceability";
import Inventory from "../Inventory";

function Layout() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agvcontrol" element={<AgvControl />} />
        <Route path="/e-kanban" element={<Ekanban />} />
        <Route path="/e-energy" element={<EnergyControl />} />
        <Route path="/e-receiving" element={<EReceiving />} />
        <Route path="/e-ro" element={<ERO />} />
        <Route path="/e-inventory" element={<Inventory />} />
        <Route path="/e-staging" element={<EStaging />} />
        <Route path="/leadercontrol" element={<LeaderControl />} />
        <Route path="/sopdx" element={<SOPDX />} />
        <Route path="/e-tracability" element={<Traceability />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Layout;

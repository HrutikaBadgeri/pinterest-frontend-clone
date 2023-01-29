import React from "react";
import SettingsNav from "./Settings/SettingsNav";
import { Routes, Route, Outlet } from "react-router-dom";
function Settings() {
  return (
    <div style={{ height: "700px", display: "block" }}>
      <SettingsNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Settings;

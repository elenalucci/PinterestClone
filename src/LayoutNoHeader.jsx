import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function LayoutNoHeader() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutNoHeader;
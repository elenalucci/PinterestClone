import TopBar from "./components/Header/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function LayoutNoHeader({onOpenCreateBoard}) {
  return (
    <div className="flex min-h-screen items-start">
      <Sidebar onOpenCreateBoard={onOpenCreateBoard}/>

      <main className="flex-1">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutNoHeader;
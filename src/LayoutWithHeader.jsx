import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function LayoutWithHeader(){
    return(
        <div className="flex h-screen">
            <Sidebar />
             <div className="flex flex-1 flex-col overflow-auto">
                <div>
                    <Header />
                </div>

                <main className="flex-1 bg-blue-100">
                    <div className="min-h-full">
                        <Outlet />
                    </div>
                </main>
                
            </div> 

        </div>

    );
}

export default LayoutWithHeader;
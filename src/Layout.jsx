import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <div className="flex h-screen">
            <Sidebar />
             <div className="col-span-10 flex flex-1 flex-col">
                <Header />
                <main className="flex-1 bg-blue-100">
                    <Outlet/>
                </main>
                
            </div> 

        </div>

    );
}

export default Layout;
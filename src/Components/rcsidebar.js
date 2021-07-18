import React from 'react';
import "../CSS/rcsidebar.css";
import { RecepSideBar } from "./RecepSideBar";

function Rcsidebar() {
    
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
           
            {RecepSideBar.map((val, key) => {
            return (
                <li key={key} 
                className="SidebarRow"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                    window.location.pathname = val.link;
                    }}
                    > 
                
                <div id="icon">
                    {val.icon}
                </div>

                <div id="title">
                    {val.title}
                </div>
                </li>
            );
            })}
            </ul>
        </div>
            
    );
}

export default Rcsidebar;


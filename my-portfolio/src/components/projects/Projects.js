import "./projects.css";
import { WebApps } from './WebApps';
import { MobileApps } from "./MobileApps";
import { DesktopApps } from "./DesktopApps";
import { useState } from 'react';
export const Projects = () => {
    const [activeTab, setActiveTab] = useState('Web Apps');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return(
        <div id="projects" className="projects-container">
            <h1 className="title">Projects</h1>
            <div className="tab-container">
                <div className="tab" onClick={() => handleTabClick("Web Apps")}>Web Apps</div>
                <div className="tab" onClick={() => handleTabClick("Mobile Apps")}>Mobile Apps</div>
                <div className="tab" onClick={() => handleTabClick("Desktop Apps")}>Desktop Apps</div>
            </div>
            <div className="project-container">
                {activeTab === "Web Apps" && <WebApps />}
                {activeTab === "Mobile Apps" && <MobileApps />}
                {activeTab === "Desktop Apps" && <DesktopApps />}
            </div>
        </div>
    );
}
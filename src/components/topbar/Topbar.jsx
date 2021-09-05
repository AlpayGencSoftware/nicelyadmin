import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings, Language } from '@material-ui/icons';
 

export default function Topbar() {
    return (
        <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topleft">
                        <span className="logo">Nicely Admin</span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">
                                2
                            </span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language/>  
                        </div>
                        <div className="topbarIconContainer">
                            <Settings/>
                        </div>
                    </div>
                </div>
            Topbar JSX
        </div>
    )
}

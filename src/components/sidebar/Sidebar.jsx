import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <ul className="sidebarList">
              <li className="SidebarLisIte">
                <LineStyle />
                Home
              </li>
              <li className="SidebarLisIte">
                <Timeline />
                Analitics
              </li>
              <li className="SidebarLisIte">
                <TrendingUp />
                Sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

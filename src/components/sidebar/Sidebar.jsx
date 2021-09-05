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
              <li className="sidebarListItem">
                <LineStyle />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline />
                Analitics
              </li>
              <li className="sidebarListItem">
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

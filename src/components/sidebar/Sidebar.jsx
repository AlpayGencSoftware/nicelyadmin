import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney, Assessment, Mail, DynamicFeed, Message, Work, Report } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analitics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <div className="sidebarList">
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <Person className="sidebarIcon" />
                Users
              </li>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <Assessment className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <div className="sidebarList">
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <Mail className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <Message className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <div className="sidebarList">
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <Work className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analitics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

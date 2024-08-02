import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
  Store,
} from "@mui/icons-material";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { LanguageContext } from "../../context/languageContext";
import text from "../../text.json";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">admin2024</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{text.sidebar.main[language]}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>{text.sidebar.dashboard[language]}</span>
            </li>
          </Link>
          <p className="title">{text.sidebar.lists[language]}</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutline className="icon" />
              <span>{text.sidebar.users[language]}</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>{text.sidebar.products[language]}</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>{text.sidebar.orders[language]}</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>{text.sidebar.delivery[language]}</span>
          </li>
          <p className="title">{text.sidebar.useful[language]}</p>
          <li>
            <InsertChart className="icon" />
            <span>{text.sidebar.stats[language]}</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>{text.sidebar.notifications[language]}</span>
          </li>
          <p className="title">{text.sidebar.service[language]}</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>{text.sidebar.systemhealth[language]}</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>{text.sidebar.logs[language]}</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>{text.sidebar.settings[language]}</span>
          </li>
          <p className="title">{text.sidebar.user[language]}</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>{text.sidebar.profile[language]}</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>{text.sidebar.logout[language]}</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widget.scss";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import text from "../../text.json";

const Widget = ({ type }) => {
  const { language } = useContext(LanguageContext);

  let data;

  // temporary
  const amount = 100;
  const diff = 20;
  console.log(text.widgets.users.ja);

  switch (type) {
    case "user":
      data = {
        title: text.widgets.users[language],
        isMoney: false,
        link: text.widgets.users.seeall[language],
        icon: (
          <PersonOutlined
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: text.widgets.orders[language],
        isMoney: false,
        link: text.widgets.orders.viewall[language],
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: text.widgets.earnings[language],
        isMoney: true,
        link: text.widgets.earnings.viewnet[language],
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0,218,0,0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: text.widgets.balance[language],
        isMoney: true,
        link: text.widgets.balance.seedetails[language],
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128,0,128,0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

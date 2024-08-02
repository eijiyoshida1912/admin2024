import { useContext } from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import { LanguageContext } from "../../context/languageContext";
import text from "../../text.json";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title={text.chart.title[language]} aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            {text.home.transactiontitle[language]}
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

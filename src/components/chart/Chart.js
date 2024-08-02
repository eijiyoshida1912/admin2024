import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import text from "../../text.json";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const Chart = ({ aspect, title }) => {
  const { language } = useContext(LanguageContext);

  const data = [
    { name: text.chart.january[language], Total: 1200 },
    { name: text.chart.february[language], Total: 2100 },
    { name: text.chart.march[language], Total: 800 },
    { name: text.chart.april[language], Total: 1600 },
    { name: text.chart.may[language], Total: 900 },
    { name: text.chart.june[language], Total: 1700 },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList, // Import LabelList
} from "recharts";
import { Select, Row, Col, Typography } from "antd";

// Dummy Data
const dummyData = {
  daily: [
    { date: "Day 1", active: 120, inactive: 30, overdue: 10, new: 50 },
    { date: "Day 2", active: 150, inactive: 40, overdue: 5, new: 60 },
    { date: "Day 3", active: 100, inactive: 50, overdue: 15, new: 30 },
    { date: "Day 4", active: 130, inactive: 35, overdue: 8, new: 55 },
  ],
  weekly: [
    { week: "Week 1", active: 350, inactive: 90, overdue: 25, new: 150 },
    { week: "Week 2", active: 400, inactive: 110, overdue: 20, new: 180 },
    { week: "Week 3", active: 300, inactive: 120, overdue: 30, new: 140 },
    { week: "Week 4", active: 380, inactive: 95, overdue: 28, new: 160 },
  ],
  monthly: [
    { month: "October", active: 1200, inactive: 400, overdue: 90, new: 600 },
    { month: "November", active: 1400, inactive: 450, overdue: 75, new: 650 },
  ],
};

const { Option } = Select;
const { Title } = Typography;

const Chart2 = () => {
  // State to store selected time period and filtered data
  const [timePeriod, setTimePeriod] = useState("daily");
  const [filteredData, setFilteredData] = useState(dummyData.daily);
  const [visibleKeys, setVisibleKeys] = useState([
    "active",
    "inactive",
    "overdue",
    "new",
  ]);

  // Handler for time period change
  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
    setFilteredData(dummyData[value]);
  };

  const toggleBar = (key) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg my-6">
      <Title
        level={3}
        className="text-center pb-3 text-xl font-semibold text-gray-700"
      >
        Users Analytics
      </Title>

      <Row gutter={16} className="mb-8">
        <Col span={24}>
          <div className="flex items-center gap-5">
            <h4 style={{ margin: 0 }}>Choose Time Period:</h4>
            <Select
              size="large"
              defaultValue="daily"
              style={{ width: "200px" }}
              onChange={handleTimePeriodChange}
            >
              <Option value="daily">Daily</Option>
              <Option value="weekly">Weekly</Option>
              <Option value="monthly">Monthly</Option>
              <Option value="quarter">Quarterly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </div>
        </Col>
      </Row>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          {/* Legend positioned at the top */}
          <Legend
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "16px",
              cursor: "pointer",
            }}
            onClick={(e) => toggleBar(e.dataKey)}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={
              timePeriod === "daily"
                ? "date"
                : timePeriod === "weekly"
                ? "week"
                : "month"
            }
            tick={{ fontSize: 12 }}
            className="text-xs text-gray-500"
          />
          <YAxis tick={{ fontSize: 12 }} className="text-xs text-gray-500" />
          {/* Custom Tooltip */}
          <Tooltip
            contentStyle={{ borderRadius: "10px" }}
            labelStyle={{
              color: "#999B9E",
            }}
            itemStyle={{
              marginLeft: "30px",
              display: "list-item",
              listStyleType: "disc",
            }}
          />
          {/* Each Bar has a unique dataKey */}
          <Bar
            dataKey="active"
            fill="#2288FF"
            hide={!visibleKeys.includes("active")}
          >
            <LabelList
              valueAccessor={(data) => data.active}
              position="insideTop"
              style={{
                fontSize: 12,
                fill: "#204777",
              }}
            />
          </Bar>
          <Bar
            dataKey="inactive"
            fill="#0DCCCC"
            hide={!visibleKeys.includes("inactive")}
          >
            <LabelList
              valueAccessor={(data) => data.inactive}
              position="insideTop"
              style={{
                fontSize: 12,
                fill: "#167074",
              }}
            />
          </Bar>
          <Bar
            dataKey="overdue"
            fill="#F18E56"
            hide={!visibleKeys.includes("overdue")}
          >
            <LabelList
              valueAccessor={(data) => data.overdue}
              position="insideTop"
              style={{
                fontSize: 12,
                fill: "#6E4A3A",
              }}
            />
          </Bar>
          <Bar dataKey="new" fill="#D686FF" hide={!visibleKeys.includes("new")}>
            <LabelList
              valueAccessor={(data) => data.new}
              position="insideTop"
              style={{
                fontSize: 12,
                fill: "#7D5599",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2;

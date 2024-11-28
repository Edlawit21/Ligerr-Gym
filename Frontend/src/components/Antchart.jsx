import { useState } from "react";
import { Select, Row, Col, Typography } from "antd";
import { Column } from "@ant-design/charts";

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

const Chart = () => {
  const [timePeriod, setTimePeriod] = useState("daily");
  const [filteredData, setFilteredData] = useState(dummyData.daily);

  // Handle time period change
  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
    setFilteredData(dummyData[value]);
  };

  // Prepare the data for the chart
  const formattedData = Object.keys(filteredData[0])
    .filter((key) => key !== "date" && key !== "week" && key !== "month")
    .map((type) => {
      return filteredData.map((item) => ({
        [timePeriod === "daily"
          ? "date"
          : timePeriod === "weekly"
          ? "week"
          : "month"]:
          item[
            timePeriod === "daily"
              ? "date"
              : timePeriod === "weekly"
              ? "week"
              : "month"
          ],
        value: item[type],
        type,
      }));
    })
    .flat();

  // Define color mapping based on type
  const colorMap = {
    active: "#4CAF50", // Green for active
    inactive: "#FF9800", // Orange for inactive
    overdue: "#F44336", // Red for overdue
    new: "#2196F3", // Blue for new
  };

  // Chart configuration
  const config = {
    data: formattedData,
    xField:
      timePeriod === "daily"
        ? "date"
        : timePeriod === "weekly"
        ? "week"
        : "month",
    yField: "value",
    seriesField: "type",
    colorField: "type",
    color: (type) => colorMap[type] || "#000000",
    label: {
      visible: true,
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "#000000", // Black color for vertical grid lines
            lineWidth: 2, // Thicker grid lines for visibility
            lineDash: [4, 4], // Dashed lines for better visibility
          },
        },
      },
    },
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: "#e0e0e0", // Light gray color for horizontal grid lines
            lineWidth: 1, // Thinner horizontal lines
            lineDash: [4, 4], // Dashed lines for horizontal grid lines
          },
        },
      },
    },
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg my-6">
      <Title
        level={3}
        className="text-center pb-3 text-xl font-semibold text-gray-700"
      >
        User Activity Analytics
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
            </Select>
          </div>
        </Col>
      </Row>

      {/* Ant Design Vertical Bar Chart */}
      <Column {...config} />
    </div>
  );
};

export default Chart;

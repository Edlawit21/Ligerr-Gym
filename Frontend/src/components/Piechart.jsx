import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Get chart colors array
const getChartColorsArray = (dataColors) => {
  return dataColors || ["#4CAF50", "#2288FF", "#FFC107", "#FF5722", "#9C27B0"];
};

// Doughnut Chart
const Piechart = ({ dataColors }) => {
  const chartDoughnutColors = getChartColorsArray(dataColors);

  // Data for the pie chart
  const data = [
    { value: 1048, name: "Active 1" },
    { value: 735, name: "In active 2" },
    { value: 580, name: "Overdue 3" },
    { value: 484, name: "New 4" },
  ];

  return (
    <div className="shadow-lg rounded-lg w-72 bg-white p-4">
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="45%"
            outerRadius="75%"
            fill="#8884d8"
            paddingAngle={5}
            label
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartDoughnutColors[index]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value} users`, name]}
            labelStyle={{ color: "gray" }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              color: "gray",
              paddingTop: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Prop validation for ProjectStatus component
Piechart.propTypes = {
  dataColors: PropTypes.arrayOf(PropTypes.string),
};

export default Piechart;

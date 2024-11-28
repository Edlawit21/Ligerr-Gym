import { Row, Col, Card } from "antd";
import {
  AppstoreOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Widget = () => {
  const data = [
    {
      title: "Users",
      value: "281",
      icon: <UserOutlined style={{ color: "#fff", fontSize: "24px" }} />,
      change: "+55% than last week",
      bgColor: "#333",
    },
    {
      title: "Active",
      value: "230",
      icon: <TeamOutlined style={{ color: "#fff", fontSize: "24px" }} />,
      change: "+3% than last month",
      bgColor: "#1890ff",
    },
    {
      title: "Inactive",
      value: "34",
      icon: <AppstoreOutlined style={{ color: "#fff", fontSize: "24px" }} />,
      change: "+1% than yesterday",
      bgColor: "#52c41a",
    },
    {
      title: "Overdue",
      value: "+10",
      icon: <UserOutlined style={{ color: "#fff", fontSize: "24px" }} />,
      change: "Just updated",
      bgColor: "#f5222d",
    },
  ];

  return (
    <Row gutter={[20, 16]} style={{ margin: 0 }}>
      {data.map((item, index) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <div className="flex items-center mb-4">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg p-3 mr-2"
                style={{
                  backgroundColor: item.bgColor,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="m-0 font-bold">{item.title}</h4>
                <h2>{item.value}</h2>
              </div>
            </div>
            <p className="text-green-500 font-medium">{item.change}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Widget;

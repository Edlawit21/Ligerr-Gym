import { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Layout, Grid, Drawer } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Aerobics from "./Aerobics";
import CircuitTraining from "./CircuitTraining";
import Taekwondo from "./Taekwondo";
import PersonalTraining from "./PersonalTraining";
import Report from "./Report";
import Navbar from "../../components/Navbar";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const screens = useBreakpoint();
  const userRole = "admin"; // Replace with actual role from authentication

  useEffect(() => {
    if (screens.md && !screens.lg) setCollapsed(true);
    if (screens.lg) {
      setCollapsed(false);
      setVisible(false);
    }
  }, [screens]);

  const toggleSidebar = () => {
    if (screens.xs) {
      setVisible(!visible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      {!screens.xs && (
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={80}
          width={250}
          style={{
            position: "sticky",
            top: 0,
            bottom: 0,
          }}
        >
          <Sidebar collapsed={collapsed} role={userRole} />
        </Sider>
      )}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Navbar />
        </Header>
        <Content style={{ height: "100%", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aerobics" element={<Aerobics />} />
            <Route path="/circuit-training" element={<CircuitTraining />} />
            <Route path="/taekwondo" element={<Taekwondo />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Content>
      </Layout>
      {screens.xs && (
        <Drawer
          closable={false}
          open={visible}
          placement="left"
          onClose={() => setVisible(false)}
          width={250}
        >
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setVisible(false)}
            style={{
              fontSize: "16px",
              position: "absolute",
              right: 16,
              top: 16,
              zIndex: 1000,
            }}
          />
          <Sidebar role={userRole} />
        </Drawer>
      )}
    </Layout>
  );
};

export default AdminDashboard;

import {
  AppstoreOutlined,
  FileProtectOutlined,
  TeamOutlined,
  UserOutlined,
  ScanOutlined,
} from "@ant-design/icons";

export const sideItems = {
  admin: [
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "View Users",
      children: [
        { key: "1-1", label: "Taekwondo", path: "/admin/dashboard" },
        {
          key: "1-2",
          label: "Circuit Training",
          path: "/admin/dashboard/pmanagers",
        },
        { key: "1-3", label: "Aerobics", path: "/admin/dashboard" },
        { key: "1-4", label: "Personal Training", path: "/admin/dashboard" },
      ],
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Report",
      path: "/admin/dashboard/view-pharmacist",
    },
  ],
  receptionist: [
    {
      key: "1",
      icon: <ScanOutlined />,
      label: "Dashboard",
      children: [
        { key: "1-1", label: "Scan", path: "/pharmacist/dashboard/scan" },
        { key: "1-2", label: "Search", path: "/pharmacist/dashboard/search" },
      ],
    },
    {
      key: "2",
      icon: <FileProtectOutlined />,
      label: "View Users",
      path: "/pharmacist/dashboard/generate-report",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Report",
      path: "/admin/dashboard/view-pharmacist",
    },
  ],
};

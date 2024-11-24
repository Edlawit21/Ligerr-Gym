import {
  AppstoreOutlined,
  TeamOutlined,
  LineChartOutlined,
  AppstoreFilled,
} from "@ant-design/icons";

export const sideItems = (collapsed) => {
  const iconSize = collapsed ? 23 : 19;

  return {
    admin: [
      {
        key: "1",
        icon: <AppstoreFilled style={{ fontSize: iconSize }} />,
        label: "Dashboard",
        path: "/",
      },
      {
        key: "2",
        icon: <TeamOutlined style={{ fontSize: iconSize }} />,
        label: "View Users",
        children: [
          { key: "1-1", label: "Taekwondo", path: "/taekwondo" },
          { key: "1-2", label: "Circuit Training", path: "/circuit-training" },
          { key: "1-3", label: "Aerobics", path: "/aerobics" },
          {
            key: "1-4",
            label: "Personal Training",
            path: "/personal-training",
          },
        ],
      },
      {
        key: "3",
        icon: <LineChartOutlined style={{ fontSize: iconSize }} />,
        label: "Report",
        path: "/report",
      },
    ],
    receptionist: [
      {
        key: "1",
        icon: <AppstoreOutlined style={{ fontSize: iconSize }} />,
        label: "Dashboard",
        path: "/",
      },
      {
        key: "2",
        icon: <TeamOutlined style={{ fontSize: iconSize }} />,
        label: "View Users",
        children: [
          { key: "1-1", label: "Taekwondo", path: "/taekwondo" },
          { key: "1-2", label: "Circuit Training", path: "/circuit-training" },
          { key: "1-3", label: "Aerobics", path: "/aerobics" },
          {
            key: "1-4",
            label: "Personal Training",
            path: "/personal-training",
          },
        ],
      },
      {
        key: "3",
        icon: <LineChartOutlined style={{ fontSize: iconSize }} />,
        label: "Report",
        path: "/report",
      },
    ],
  };
};

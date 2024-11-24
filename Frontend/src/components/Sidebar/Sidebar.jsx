import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { sideItems } from "./SideItems"; // Adjust the path
import Ligerr from "../../assets/Ligerr2.ico";
import PropTypes from "prop-types";

const Sidebar = ({ role, collapsed }) => {
  const navigate = useNavigate();
  const items = sideItems(collapsed)[role] || [];

  const handleClick = (e) => {
    const item = findItemByKey(items, e.key);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  const findItemByKey = (items, key) => {
    for (const item of items) {
      if (item.key === key) return item;
      if (item.children) {
        const result = findItemByKey(item.children, key);
        if (result) return result;
      }
    }
    return null;
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        className="flex items-center justify-center pt-2 text-4xl font-bold"
        style={{ transition: "all 0.3s" }}
      >
        <img
          src={Ligerr}
          alt="icon"
          className={`mr-2 ${collapsed ? "h-16 w-18" : "h-18 w-20"}`}
        />
        {!collapsed && <span>LIGER</span>}
      </div>
      <Menu
        mode="inline"
        items={items}
        onClick={handleClick}
        inlineCollapsed={collapsed}
        style={{
          height: "100%",
          overflowY: "auto",
          marginTop: "10px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

Sidebar.propTypes = {
  role: PropTypes.string.isRequired, // Role must be a string
  collapsed: PropTypes.bool.isRequired, // Collapsed must be a boolean
};

export default Sidebar;

import { Dropdown, Input, Popover, Avatar } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const items = [
  {
    label: <h4>Linger Gym</h4>,
    key: "0",
  },
  {
    label: (
      <a target="_blank" href="https://www.antgroup.com">
        View Profile
      </a>
    ),
    key: "1",
  },

  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Logout
      </a>
    ),
    key: "2",
  },
];
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Navbar = () => {
  return (
    <div className="h-[50px] w-full  px-4 flex items-center justify-between ">
      <div className="flex gap-10 text-slate-500">
        <h1 className="text-xl ">Wellcome.......</h1>
      </div>
      <div className="flex items-center gap-4 mr-2 ">
        <Search
          className="mr-3"
          placeholder="Search "
          onSearch={onSearch}
          allowClear
        />

        <Popover placement="bottomRight" content={content} title="Title">
          <div className="text-slate-500 cursor-pointer  ">
            <BellOutlined className="text-xl " />
          </div>
        </Popover>
        <Dropdown
          className="pl-2 cursor-pointer "
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;

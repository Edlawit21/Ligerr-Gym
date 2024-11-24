import { useState } from "react";
import { Table, Select, Input } from "antd";

const { Option } = Select;

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const roleOptions = [
  { value: "doctor", label: "Doctor" },
  { value: "pmanager", label: "Pharmacy Manager" },
];

const Taekwondo = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeOptions = ["5", "10", "30", "40", "50"];
  const defaultPageSize = 5;
  const [usersData, setUsersData] = useState(
    [
      {
        name: "Abebe",
        gender: "male",
        role: "doctor",
        status: "Active",
      },
      {
        name: "Almaz",
        gender: "female",
        role: "pmanager",
        status: "Inactive",
      },
    ].map((user, index) => ({ ...user, key: index + 1 })) // Add unique keys
  );

  const columnUser = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          {record.status === "Active" ? (
            <button
              onClick={() => handleToggle(record)}
              style={{ color: "red" }}
            >
              Deactivate
            </button>
          ) : (
            <button
              onClick={() => handleToggle(record)}
              style={{ color: "green" }}
            >
              Activate
            </button>
          )}
        </span>
      ),
    },
  ];

  const handleToggle = (record) => {
    setUsersData((prevData) =>
      prevData.map((user) =>
        user.key === record.key
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const filteredData = usersData.filter((item) => {
    const normalizedItem = {
      ...item,
      gender: item.gender.toLowerCase(),
      role: item.role.toLowerCase(),
    };

    const matchesFilters = selectedFilters.every((filter) => {
      const [type, value] = filter.split(":");
      return normalizedItem[type]?.toLowerCase() === value.toLowerCase();
    });

    const matchesSearchText = Object.values(normalizedItem).some((val) =>
      val.toString().toLowerCase().includes(searchText.toLowerCase())
    );

    return matchesFilters && matchesSearchText;
  });

  const pagination = {
    pageSizeOptions,
    showSizeChanger: true,
    defaultPageSize,
    total: filteredData.length,
    current: currentPage,
    onChange: (page) => {
      setCurrentPage(page);
    },
    showTotal: (total, range) =>
      `Showing ${range[0]}-${range[1]} of ${total} items`,
    position: ["bottomCenter"],
  };

  return (
    <div className="w-full h-full">
      <h2 className="pb-2 font-semibold text-2xl">Taekwondo</h2>
      <div className="w-full flex items-end justify-between">
        <Input
          placeholder="Search"
          size="large"
          style={{ width: "200px" }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Select
          placeholder="Filter by"
          size="large"
          style={{ width: "200px", marginRight: "16px" }}
          mode="multiple"
          allowClear
          onChange={setSelectedFilters}
          value={selectedFilters}
        >
          {genderOptions.map((option) => (
            <Option
              key={`gender:${option.value}`}
              value={`gender:${option.value}`}
            >
              {option.label}
            </Option>
          ))}
          {roleOptions.map((option) => (
            <Option key={`role:${option.value}`} value={`role:${option.value}`}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Table
          className="center-head"
          rowSelection={{}}
          columns={columnUser}
          dataSource={filteredData}
          pagination={pagination}
          style={{
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            marginTop: "16px",
            background: "white",
            border: "1px solid #E3E6EB",
          }}
          showSorterTooltip={false}
          scroll={{ x: 10 }}
        />
      </div>
    </div>
  );
};

export default Taekwondo;

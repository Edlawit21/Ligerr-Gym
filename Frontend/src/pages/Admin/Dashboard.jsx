import { Button } from "antd";
import Widget from "../../components/Widget";
import RegisterMember from "../../components/RegisterMember";
import { useState } from "react";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="h-64">
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-yellow-500  h-40">
        <div className="py-4 flex justify-end pr-6">
          <Button onClick={showModal} className="">
            Register Member
          </Button>
        </div>
        <RegisterMember visible={isModalVisible} onClose={handleClose} />
      </div>
      <div className="mt-[-78px] px-3">
        <Widget />
      </div>
      <div>Table</div>
    </div>
  );
};

export default Dashboard;

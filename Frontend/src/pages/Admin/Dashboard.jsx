import { Button } from "antd";
import Widget from "../../components/Widget";
import RegisterMember from "../../components/RegisterMember";
import { useState } from "react";
import TableAll from "../../components/TableAll";
import Piechart from "../../components/Piechart";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="h">
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
      <div className="flex my-7 px-[24px] gap-6">
        <div className=" w-[70%] rounded-lg">
          <TableAll />
        </div>
        <div className="shadow-lg rounded-lg w-72 bg-white">
          <Piechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

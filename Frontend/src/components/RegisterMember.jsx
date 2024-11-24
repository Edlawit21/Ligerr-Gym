import { Modal, Form, Input, Button, Radio, Checkbox } from "antd";
import fontL from "../assets/fontL.png";
import Ligerr from "../assets/Ligerr2.ico";
import PropTypes from "prop-types";

const RegisterMember = ({ visible, onClose }) => {
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    onClose();
  };

  return (
    <div>
      <Modal
        title={
          <div className="ml-[-60px] flex justify-center items-center gap-4">
            <img
              src={Ligerr}
              alt="Membership Registration"
              style={{ height: "90px" }}
            />
            <img
              src={fontL}
              alt="Membership Registration"
              style={{ width: "280px", height: "120px" }}
            />
          </div>
        }
        open={visible}
        onCancel={onClose}
        footer={null}
        width={1000}
        style={{
          top: 40,
        }}
      >
        <h2 className="mb-6 font-semibold text-5xl underline text-center">
          Membership Registration Form
        </h2>
        <Form
          onFinish={handleSubmit}
          requiredMark={false}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <h2>Personal Information</h2>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please enter the member's name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            rules={[
              { required: true, message: "Please enter the date of birth!" },
            ]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select the gender!" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="contactNo"
            label="Contact Number"
            rules={[
              { required: true, message: "Please enter the contact number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <h2>Emergency Contact Information</h2>
          <Form.Item
            name="emergencyName"
            label="Name"
            rules={[
              { required: true, message: "Please enter the contact name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[
              { required: true, message: "Please enter the relationship!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="emergencyContactNo"
            label="Contact Number"
            rules={[
              { required: true, message: "Please enter the contact number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <h2>Membership Type</h2>
          <Form.Item
            name="membershipType"
            rules={[
              { required: true, message: "Please select a membership type!" },
            ]}
          >
            <div style={{ display: "flex", gap: "80px" }}>
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Checkbox value="gym">GYM</Checkbox>
                <Checkbox value="aerobics">Aerobics</Checkbox>
              </Checkbox.Group>

              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Checkbox value="circuit">Circuit Training</Checkbox>
                <Checkbox value="taekwondo">Taekwondo</Checkbox>
              </Checkbox.Group>
              <Checkbox.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Checkbox value="personal">Personal Training</Checkbox>
              </Checkbox.Group>
            </div>
          </Form.Item>

          <h2>Membership Duration</h2>
          <Form.Item
            name="duration"
            rules={[{ required: true, message: "Please select a duration!" }]}
          >
            <Checkbox.Group>
              <Checkbox value="monthly">1 Month</Checkbox>
              <Checkbox value="threeMonths">3 Months</Checkbox>
              <Checkbox value="sixMonths">6 Months</Checkbox>
              <Checkbox value="dayPass">Day Pass</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="startDate"
            label="Preferred Start Date"
            rules={[{ required: true, message: "Please select a start date!" }]}
          >
            <Input type="date" />
          </Form.Item>

          <h2>Health Information</h2>
          <Form.Item
            name="medicalConditions"
            label="Any medical conditions or allergies we should be aware of?"
            layout="vertical"
          >
            <Radio.Group>
              <Radio value="yes">YES</Radio>
              <Radio value="no">NO</Radio>
            </Radio.Group>
            <label className="flex flex-col">If yes, please specify</label>
            <Input.TextArea rows={2} placeholder="Specify if any" />
          </Form.Item>

          <h2 className="mt-16">Payment Method</h2>
          <Form.Item
            name="payment"
            rules={[
              { required: true, message: "Please select payment method!" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="cash">Cash</Checkbox>
              <Checkbox value="bank">Bank Transfer</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <h2>Working Days & Hours</h2>
          <p>
            We are open <strong>Monday-Saturday</strong>, except during the
            following hours:
            <br />
            Wednesday: 8:00-10:00 PM
            <br />
            Friday: 8:00-10:00 PM
          </p>

          <h2>Terms and Conditions</h2>
          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must accept the terms and conditions!")
                      ),
              },
            ]}
          >
            <Checkbox>
              I have read and agree to the terms and conditions set forth by
              Liger Gym.
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="dateregistered"
            label="Registered Date"
            rules={[{ required: true, message: "Please select a start date!" }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

RegisterMember.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegisterMember;

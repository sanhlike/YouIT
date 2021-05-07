import React, { useState } from "react";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Input,
  Form,
  Checkbox,
  Select,
  DatePicker,
  message,
} from "antd";
import { FacebookFilled } from "@ant-design/icons";

import { ReactComponent as ReactLogo } from "../../assets/add-user.svg";
import logo from "../../assets/lightlogo.png";

import styles from "./styles";
import { FaFacebookF, FaFacebookSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { Option } from "antd/lib/mentions";
import { Link } from "react-router-dom";
import { signup } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const { Title, Text, Paragraph } = Typography;

const dateFormat = "DD/MM/YYYY";

const initialState = {
  newEmail: "",
  newPassword: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
};

function RegisterPage() {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e?.target.name]: e?.target.value });
  };

  const handleChangeDob = (date) => {
    setForm({ ...form, dob: date });
  };

  const handleChangeGender = (value) => {
    setForm({ ...form, gender: value });
  };

  const handleFinish = (values) => {
    const data = {
      email: form.newEmail,
      password: form.newPassword,
      firstName: form.firstName,
      lastName: form.lastName,
      gender: form.gender,
      dob: form.dob,
    };
    dispatch(signup(data, history));
  };

  const handleFinishFailed = (errorInfo) => {
    errorInfo.errorFields.map((err) => {
      message.error(err.errors[0]);
    });
  };

  return (
    <div className="full d-flex align-items-center justify-content-center">
      <div
        style={{
          width: 1000,
          paddingBottom: 0,
        }}
      >
        <Row style={{ justifyContent: "center" }}> </Row>
        <Card className="shadow-lg rounded" bordered={false}>
          <Row>
            <Col span={12} style={{ paddingRight: 24, marginBottom: 0 }}>
              <Row>
                <img src={logo} alt="Logo" height="58" className="mr-2" />
                <Title style={{ marginBottom: 8 }}>Register</Title>
              </Row>
              <div style={{ marginBottom: 16 }}>
                <Text>
                  Already have an account?{" "}
                  <Link to="/login">
                    <Text className="clickable green bold">Log in</Text>
                  </Link>
                </Text>
              </div>
              <Form
                name="basic"
                size="large"
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
              >
                <Form.Item
                  name="newEmail"
                  rules={[
                    {
                      type: "email",
                      message: "Invalid email.",
                    },
                    {
                      required: true,
                      message: "Email is required.",
                    },
                  ]}
                >
                  <Input
                    name="newEmail"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: "Password is required.",
                    },
                  ]}
                >
                  <Input.Password
                    name="newPassword"
                    autoComplete="newPassword"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  dependencies={["newPassword"]}
                  rules={[
                    {
                      required: true,
                      message: "Password confirm is required.",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm password"
                    suffix={null}
                  />
                </Form.Item>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "First name is required.",
                        },
                      ]}
                    >
                      <Input
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Last name is required.",
                        },
                      ]}
                    >
                      <Input
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="gender"
                      rules={[
                        {
                          required: true,
                          message: "Gender is required.",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Gender"
                        name="gender"
                        onChange={handleChangeGender}
                        style={{ width: "100%" }}
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="dob"
                      rules={[
                        {
                          required: true,
                          message: "Date of birth is required.",
                        },
                      ]}
                    >
                      <DatePicker
                        name="dob"
                        placeholder="Date of birth"
                        onChange={handleChangeDob}
                        style={{ width: "100%" }}
                        format={dateFormat}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item style={{}}>
                  <Button
                    style={{ width: "100%" }}
                    className="green-container"
                    htmlType="submit"
                  >
                    Create account
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12} style={{ marginTop: 0 }}>
              <div>
                <ReactLogo />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default RegisterPage;

  import { Button, Form, Input } from "antd";
  import { useDispatch, useSelector } from "react-redux";
  import { AppDispatch, RootState } from "../../store";
  import  { createLogIn } from "../../Slices/auth/SignIn";
  import { Navigate } from "react-router-dom";
  import { FacebookOutlined} from "@ant-design/icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons";
type Props = {};

const Login = () => {
  const { data } = useSelector(
    (state: RootState) => state.SignIn
  );
  const dispatch = useDispatch<AppDispatch>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(createLogIn(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  if (Object.keys(data).length) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Form
        style={{ marginTop: "35%" }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 style={{ textAlign: "center" }}>CyberBugs</h1>
        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        ></Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <div className="mt-2">
            <a style={{ fontSize: "30px", color: "blue" }}>
              <FacebookOutlined />
            </a>
            <a>
              <FontAwesomeIcon
                style={{
                  backgroundColor: "#1890ff",
                  color: "white",
                  padding: "5px",
                  margin: "0px 0 0 20px",
                  borderRadius: "100%",
                  fontSize: "15px",
                }}
                icon={faTwitter}
              />
            </a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

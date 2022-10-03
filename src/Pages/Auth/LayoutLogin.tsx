import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Login from "./Login";
const { Header, Footer, Sider, Content } = Layout;

const LayoutLogin = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight / 2,
  });
  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  });
  return (
    <div>
      <Layout>
        <Sider
          width={window.innerWidth / 2}
          style={{
            height: window.innerHeight,
            background: `url(https://picsum.photos/${Math.round(
              window.innerWidth / 2
            )}/${window.innerHeight})`,
          }}
        ></Sider>
        <Layout>
          <Content>
            <Login />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutLogin;

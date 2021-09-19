import { Layout } from "antd";
import React from "react";

const { Sider } = Layout;

class Sidemenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider fixed trigger={null} collapsed={true}>
          <div className="logo" />
          <p>sdf</p>
        </Sider>
      </Layout>
    );
  }
}

export default Sidemenu;

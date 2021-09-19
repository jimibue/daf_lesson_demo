import React from "react";
import { Collapse, Divider } from "antd";

const DummyCollapse = ({ header, children }) => {
  return (
    <>
      <Collapse ghost defaultActiveKey={["2"]}>
        <Collapse.Panel
          // activeKey="1"
          style={{
            boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          header={
            <h5
              style={{
                display: "inline-block",
                margin: "0px 0 0 0",
                color: "steelblue",
              }}
            >
              {header}
            </h5>
          }
          key="1"
          // showArrow={false}
        >
          {children}
        </Collapse.Panel>
      </Collapse>
      <Divider style={{ margin: "0px 0" }}></Divider>
    </>
  );
};
export default DummyCollapse;

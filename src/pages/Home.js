import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

const Home = () => {
  const renderRoutes = () => {
    return routes.map((r) => (
      <>
        <Link to={r.pathname}>
          <Card style={{ margin: "5px" }}>
            <Meta
              avatar={
                <Avatar src="https://konfinity-assets.s3.ap-south-1.amazonaws.com/blog/React+Lifecycle.png" />
              }
              title={r.name}
              description={
                <span
                  style={{
                    fontSize: "10px",
                    position: "relative",
                    top: "-15px",
                  }}
                >
                  9/20/21
                </span>
              }
            />
          </Card>
        </Link>
      </>
    ));
  };
  return (
    <>
      <h1>Home</h1>
      <h3>Select a lesson</h3>
      {renderRoutes()}
    </>
  );
};
export default Home;

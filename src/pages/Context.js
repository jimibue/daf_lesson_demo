import { Card } from "antd";
import React from "react";
import DummyCollapse from "../components/DummyCollapse";
// import { lifecycle_md } from "../data/lifecylce_md";
// // import Question from "./components/Question";
// import { projectSetupMD } from "../data/markdown";

const Context = () => {
  // const [markdown, setMarkdown] = useState(projectSetupMD);
  // const [lifecycleMD, setLifecycleMD] = useState(lifecycle_md);
  return (
    <Card style={{ marginBottom: "40px" }}>
      <h1>hello</h1>
      <DummyCollapse header="Brain Teaser">x</DummyCollapse>
      <DummyCollapse header=""></DummyCollapse>
      <DummyCollapse header="DEMO: Example App"></DummyCollapse>

      <DummyCollapse header="Homework"></DummyCollapse>

      <DummyCollapse header="Resources"></DummyCollapse>
    </Card>
  );
};
export default Context;

import React, { useState } from "react";
import { Card } from "antd";

// import Question from "./components/Question";
import { md, projectSetupMD } from "../data/markdown";
import DummyCollapse from "../components/DummyCollapse";
import { lifecycle_md } from "../data/lifecylce_md";

const Context = () => {
  const [markdown, setMarkdown] = useState(projectSetupMD);
  const [lifecycleMD, setLifecycleMD] = useState(lifecycle_md);
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

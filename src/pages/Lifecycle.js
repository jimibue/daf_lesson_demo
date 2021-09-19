import React, { useState } from "react";
import { Avatar, Card, Divider } from "antd";

// import Question from "./components/Question";
import { md, projectSetupMD } from "../data/markdown";
import DummyCollapse from "../components/DummyCollapse";
import MarkdownWithEditor from "../components/MarkdownWithEditor";
import MarkdownWithEditor1 from "../components/MarkDownWithEditor1";
import { lifecycle_md } from "../data/lifecylce_md";
import { sort_first_md, sort_first_solition_md } from "../data/brainteasers";
import Meta from "antd/lib/card/Meta";

const Lifecycle = () => {
  const [markdown, setMarkdown] = useState(projectSetupMD);
  const [sortFirstMD, setSortFirstMD] = useState(sort_first_md);
  const [sortFirstSolutionMD, setSortFirstSolutionMD] = useState(
    sort_first_solition_md
  );
  const [lifecycleMD, setLifecycleMD] = useState(lifecycle_md);
  return (
    <>
      <Card style={{ margin: "10px 0 10px 0" }}>
        <Meta
          avatar={
            <Avatar src="https://konfinity-assets.s3.ap-south-1.amazonaws.com/blog/React+Lifecycle.png" />
          }
          title={"Life Cycle Methods"}
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
      <Card style={{ marginBottom: "40px" }}>
        <DummyCollapse header="Brain Teaser">
          <DummyCollapse header="ArraySort Part 1">
            <MarkdownWithEditor
              markdown={sortFirstMD}
              setMarkdown={setSortFirstMD}
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xWBP4lzkoyM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </DummyCollapse>
          <DummyCollapse header="Solution">
            <MarkdownWithEditor
              markdown={sortFirstSolutionMD}
              setMarkdown={setSortFirstSolutionMD}
            />
          </DummyCollapse>
        </DummyCollapse>
        <DummyCollapse header="React Lifecycle Methods">
          <MarkdownWithEditor1
            markdown={lifecycleMD}
            setMarkdown={setLifecycleMD}
          />
        </DummyCollapse>
        <DummyCollapse header="DEMO: Example App">
          <DummyCollapse header="What we are building">
            <MarkdownWithEditor markdown={markdown} setMarkdown={setMarkdown} />
          </DummyCollapse>
          <DummyCollapse header="Setup">
            <MarkdownWithEditor markdown={markdown} setMarkdown={setMarkdown} />
          </DummyCollapse>
          <DummyCollapse header="Part 2: ....">
            <MarkdownWithEditor markdown={markdown} setMarkdown={setMarkdown} />
          </DummyCollapse>
        </DummyCollapse>

        <DummyCollapse header="Homework">
          <MarkdownWithEditor1
            markdown={lifecycleMD}
            setMarkdown={setLifecycleMD}
          />
        </DummyCollapse>

        <DummyCollapse header="Resources">
          <MarkdownWithEditor1
            markdown={`## stuff here`}
            setMarkdown={setLifecycleMD}
          />
        </DummyCollapse>
      </Card>
    </>
  );
};
export default Lifecycle;

import { EditFilled, FileAddFilled } from "@ant-design/icons";
import React from "react";
import Markdown1 from "./Markdown1";
import Markdown from "./Markdown";
import MardownEditor from "./MarkdownEditor";

const MarkdownWithEditor = ({ markdown, setMarkdown }) => {
  const [showForm, setShowForm] = React.useState(false);
  // const [markdown, setMarkdown] = React.useState(md);

  const render = () => {
    if (showForm) {
      return <MardownEditor markdown={markdown} setMarkdown={setMarkdown} />;
    } else {
      return <Markdown markdown={markdown} />;
      // return <Markdown1 markdown={markdown} />;
    }
  };
  return (
    <div>
      {render()}
      <div onClick={() => setShowForm(!showForm)}>
        {showForm ? <FileAddFilled /> : <EditFilled />}
      </div>
    </div>
  );
};
export default MarkdownWithEditor;

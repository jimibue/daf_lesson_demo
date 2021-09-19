import { EditFilled, FileAddFilled } from "@ant-design/icons";
import React from "react";
import Markdown1 from "./Markdown1";
import MardownEditor from "./MarkdownEditor";

const MarkdownWithEditor1 = ({ markdown, setMarkdown }) => {
  const [showForm, setShowForm] = React.useState(false);
  // const [markdown, setMarkdown] = React.useState(md);

  const render = () => {
    console.log("shoeform", showForm);
    if (showForm) {
      return <MardownEditor markdown={markdown} setMarkdown={setMarkdown} />;
      // return <p>yo</p>;
    } else {
      // return <Markdown markdown={markdown} />;
      return <Markdown1 markdown={markdown} />;
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
export default MarkdownWithEditor1;

import React from "react";
import MDEditor from "@uiw/react-md-editor";
function MardownEditor({ mkdStr, markdown, setMarkdown }) {
  const [value, setValue] = React.useState(markdown);
  return (
    <div className="container">
      <MDEditor
        height={200}
        value={markdown ? markdown : value}
        onChange={setMarkdown ? setMarkdown : setValue}
      />
      <div style={{ padding: "50px 0 0 0" }} />
      {/* <MDEditor.Markdown
        source={markdown ? markdown : value}
        linkTarget="_blank"
        // previewOptions={{
        //   linkTarget: "_blank"
        // }}
      /> */}
    </div>
  );
}
export default MardownEditor;

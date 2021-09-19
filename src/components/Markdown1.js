import MDEditor from "@uiw/react-md-editor";
import React from "react";

const Markdown1 = ({ markdown }) => {
  // const [value, setValue] = React.useState("copy");
  // const [copied, setCopied] = React.useState(false);
  return (
    <MDEditor.Markdown
      source={markdown}
      linkTarget="_blank"
      // previewOptions={{
      //   linkTarget: "_blank"
      // }}
    />
  );
};

export default Markdown1;

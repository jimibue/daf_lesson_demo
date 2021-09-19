import React from "react";
import ReactMarkdown from "react-markdown";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  dark,
  light,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { CopyOutlined } from "@ant-design/icons";
import { md } from "../data/markdown";
import MDEditor from "@uiw/react-md-editor";

const Markdown1 = ({ markdown }) => {
  const [value, setValue] = React.useState("copy");
  const [copied, setCopied] = React.useState(false);
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

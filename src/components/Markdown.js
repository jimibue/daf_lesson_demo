import React from "react";
import ReactMarkdown from "react-markdown";
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import {
//   dark,
//   light,
//   materialLight,
//   tomorrow,
//   materialDark,
//   synthwave84,
// } from "react-syntax-highlighter/dist/esm/styles/prism";
import { md } from "../data/markdown";
import CopiedMarkdown from "./CopiedMarkdown";

const Markdown1 = ({ markdown }) => {
  return (
    // <div className="markdown-body">
    <>
      <ReactMarkdown
        className="md-yo"
        children={markdown ? markdown : md}
        components={{
          code({ node, inline, className, children, ...props }) {
            console.log("children", children);
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CopiedMarkdown match={match} children={children} {...props} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
    // </div>
  );
};

export default Markdown1;

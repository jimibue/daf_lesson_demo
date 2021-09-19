import { CopyFilled, CopyOutlined } from "@ant-design/icons";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

const CopiedMarkdown = ({ children, match, ...props }) => {
  const [copied, setCopied] = React.useState(false);
  const copiedEffect = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 300);
  };
  return (
    // <div className="markdown-body">

    <>
      <CopyToClipboard
        text={String(children).replace(/\n$/, "")}
        onCopy={copiedEffect}
      >
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "10px",
              color: "white",
            }}
          >
            {copied ? <CopyFilled /> : <CopyOutlined />}
          </span>
        </div>
      </CopyToClipboard>
      <SyntaxHighlighter
        // showLineNumbers={true}
        wrapLongLines
        children={String(children).replace(/\n$/, "")}
        style={synthwave84}
        language={match ? match[1] : null}
        PreTag="div"
        {...props}
      />
    </>
  );
};

export default CopiedMarkdown;

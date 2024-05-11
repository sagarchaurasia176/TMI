import React from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <Box
      className=" border  border-black border-x-2"
      height="100%"
      width="100%"
    >
      <Editor
        height="100%"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
  

    </Box>
  );
};

export default CodeEditor;

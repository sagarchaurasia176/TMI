import React from 'react';
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [value, setValue] = useState("");
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
        defaultValue="// write your code below"
        value={value}
        onChange={(value) => setValue(value)}
      />
      {/* update  */}
      {/* code editor by aditya */}
    </Box>
  );
};

export default CodeEditor;

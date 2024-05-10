import React, { useState } from 'react';
import { Box } from "@chakra-ui/react";
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [value, setValue] = useState("");
  return (
    <Box height="100%" width="100%">
      <Editor 
        height="100%"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// write your code below"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Box>
  );
}

export default CodeEditor;

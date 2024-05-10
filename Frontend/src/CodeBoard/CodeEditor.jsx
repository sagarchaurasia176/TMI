
import React from 'react';
import { Box } from "@chakra-ui/react";
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <Box className=' border border-black border-x-2' height="100%" width="100%">
      <Editor 
        height='auto'
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      {/* code editor by aditya */}
    </Box>
  );
}

export default CodeEditor;

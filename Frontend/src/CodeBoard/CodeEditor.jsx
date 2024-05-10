<<<<<<< HEAD
import React from "react";

const CodeEditor = () => {
  return (
    <div>
      {/* code editor parts here*/}
      {/* <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      /> */}
    </div>
  );
};
=======
import React from 'react';
import { Box } from "@chakra-ui/react";
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <Box height="100%" width="100%">
      <Editor 
        height="100%"
        width="100%"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </Box>
  );
}
>>>>>>> 30899c3167bb2fa93633ecf49781e90519be1b88

export default CodeEditor;

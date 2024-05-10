
import React from 'react';
import { Box } from "@chakra-ui/react";
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <Box className=' border  border-black border-x-2' 
     height="100%"
      width="100%">

      <Editor 
        height='100%'
<<<<<<< HEAD
        width="100%"
=======
                width="100%"
>>>>>>> 267c37a565a99c45b14e46b8af2daa13e23ffc32
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      {/* code editor by aditya */}
    </Box>
  );
}

export default CodeEditor;

import React, { useContext, useRef } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { ThemeContext } from "@/context/ThemeContext";
import { PanelGroup, Panel } from "react-resizable-panels";

const CodeEditor = () => {
  const { CodeEditorPromtValue, setCodeEditor } = useContext(ThemeContext);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // for taking the code input
  const ChangeHandler = (value) => {
    setCodeEditor(value); // 'value' is the updated content from the editor
  };

  return (
     
          <Editor
            defaultLanguage="javascript"
            value={CodeEditorPromtValue}
            defaultValue="//Paste your code and analyze time complexity ❤️"
            onMount={handleEditorDidMount}
            onChange={ChangeHandler}
          />
     
  );
};

export default CodeEditor;

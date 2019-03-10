import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';



const InputArea = () => {

  return(
  <AceEditor
    mode="java"
    width="100%"
    theme="github"
    //onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true,}}
  />);

}

export default InputArea;

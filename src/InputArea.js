import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import './InputArea.css';

import 'brace/mode/java';
import 'brace/theme/solarized_dark';



const InputArea = ({ defaultValue, onChange }) => {


  return(
    <AceEditor
      mode="java"
      width="100%"
      theme="solarized_dark"
      value = {defaultValue}
      fontSize="16px"
      showPrintMargin={false}
      onChange={onChange}
      name="inputarea"
      editorProps={{$blockScrolling: true,}}
      style={{resize: 'vertical',overflowY: 'scroll',fontFamily: "'Source Code Pro', monospace", minHeight: '100px'}}
    />

)

}

export default InputArea;

import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import './InputArea.css';

import 'brace/mode/java';
import 'brace/theme/solarized_dark';



const InputArea = ({ defaultValue }) => {

  //console.log(defaultValue);

  return(
  <div className='inputarea-wrapper'>
    <AceEditor
      mode="java"
      width="100%"
      theme="solarized_dark"
      value = {defaultValue}
      showPrintMargin={false}
      //onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true,}}
    />
  </div>
)

}

export default InputArea;

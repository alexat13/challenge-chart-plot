import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import './InputArea.css';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');




const InputArea = () => {

  return <CodeMirror
  	      className='code'
		  value='erwerw'
		  options={{
		    mode: 'javascript',
		    theme: 'material',
		    lineNumbers: true,
		    readOnly: false
		  }}
		  onChange={(editor, data, value) => {
		  }}
		/>
}

export default InputArea;
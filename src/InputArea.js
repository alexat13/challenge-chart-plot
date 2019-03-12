import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import './InputArea.css';

import 'brace/mode/java';
import 'brace/theme/solarized_dark';

class InputArea extends Component{

  constructor(props){
    super(props);

    this.inputcontainer = React.createRef();
    this.resizer = React.createRef();

  }


  // resize = (e) => {
  //   this.inputpanel.style.height = this.inputpanel.style.width = e.pageY - this.inputpanel.getBoundingClientRect().bottom + 'px';
  //   console.log(this.inputpanel.style);
  // }

componentDidMount(){
  console.log(this.resizer);
  this.resizer.current.addEventListener('mousedown',()=>console.log('mousedown'));
  // this.inputpanel = document.querySelector(".inputpanel");
  // this.resizer = document.querySelector(".resizer");
  //
  // this.resizer.addEventListener('mousedown', (e)=>{
  //   this.resizer.addEventListener('mousemove',this.resize)
  // });

}

render(){

  return(
    <div className="inputcontainer" ref={this.inputcontainer}>
    <AceEditor
      mode="java"
      width="100%"
      theme="solarized_dark"
      value = {this.props.values}
      fontSize="16px"
      showPrintMargin={false}
      onChange={this.props.onChange}
      name="inputarea"
      editorProps={{$blockScrolling: true,}}
      style={{fontFamily: "'Source Code Pro', monospace", minHeight: '100px', height: 'inherit'}}
    />
    <div className='resizer' ref={this.resizer}></div>
    </div>

  )

}
}

export default InputArea;

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

    this.state = {
      inputHeight: '100px'
    }

  }


  resize = (e) => {
    // console.log('top',this.inputcontainer.current.getBoundingClientRect().top);
    // console.log('pageY',e.pageY);
    // console.log('dif',e.pageY-this.inputcontainer.current.getBoundingClientRect().top)
    const newHeight = e.pageY - (this.inputcontainer.current.getBoundingClientRect().top) + 'px';
    this.setState({inputHeight: newHeight });
    //this.inputcontainer.current.style.height = e.pageY - (this.inputcontainer.current.getBoundingClientRect().top) + 'px';
    //this.inputcontainer.current.style.height = '300px';
    //console.log(this.inputcontainer.current.style)
    //console.log(this.inputpanel.style);
  }

  stopResize = (e) =>{
    window.removeEventListener('mousemove', this.resize);
    console.log('removed');
  }

componentDidMount(){
  //console.log(this.resizer);
  //this.resizer.current.addEventListener('mousedown',resize);
  // this.inputpanel = document.querySelector(".inputpanel");
  // this.resizer = document.querySelector(".resizer");

  this.body = document.body;
  console.log(this.body);
  //
  this.resizer.current.addEventListener('mousedown', (e)=>{
    window.addEventListener('mousemove',this.resize);
    window.addEventListener('mouseup',this.stopResize);
    //this.resizer.current.addEventListener('mousemove',this.resize);
  });

}

render(){

  return(
    <div className="inputcontainer" ref={this.inputcontainer}>
    <AceEditor
      mode="java"
      width="100%"
      height={this.state.inputHeight}
      theme="solarized_dark"
      showPrintMargin = {false}
			wrapEnabled     = {true}
      value = {this.props.values}
      fontSize="16px"
      showPrintMargin={false}
      onChange={this.props.onChange}
      name="inputarea"
      editorProps={{$blockScrolling: true,}}
      style={{fontFamily: "'Source Code Pro', monospace", minHeight: "100px"}}
    />
    <div className='resizer' ref={this.resizer}></div>
    </div>

  )

}
}

export default InputArea;


{/*<div className="inputcontainer" ref={this.inputcontainer}>
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
</div>*/}

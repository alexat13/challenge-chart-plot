
/*This is renders the input field
*  wrapped in a resizable div
*/

import React, { Component } from 'react';
import AceEditor from 'react-ace';
import './InputArea.css';

import 'brace/mode/java';
import 'brace/theme/solarized_dark';

class InputArea extends Component{

  constructor(props){
    super(props);

    /*Creating Refs for the input field and the resizer*/
    this.inputcontainer = React.createRef();
    this.resizer = React.createRef();

    this.state = {
      inputHeight: '100%'
    }

  }

  /*Gets the new height based on the mouse Y coordinates and sets the new height in the State*/
  resize = (e) => {

    const newHeight = e.pageY - (this.inputcontainer.current.getBoundingClientRect().top) + 'px';

    this.setState({inputHeight: newHeight });

  }

  /*Stops resizing*/
  stopResize = (e) =>{
    window.removeEventListener('mousemove', this.resize);
  }

/*Adding the event listeners for the resing process*/
componentDidMount(){

  this.resizer.current.addEventListener('mousedown', (e)=>{
    window.addEventListener('mousemove',this.resize);
    window.addEventListener('mouseup',this.stopResize);
  });

}

/*Rendering the chart component with the data and
*the function that deals with changes on the input
*area as props, as well as other configs.
*/
render(){
  const { values, onChange} = this.props;
  return(
    <div className="inputcontainer" ref={this.inputcontainer}>
    <AceEditor
      mode="java"
      width="100%"
      height={this.state.inputHeight}
      theme="solarized_dark"
      showPrintMargin = {false}
			wrapEnabled     = {true}
      value = {values}
      fontSize="16px"
      onChange={onChange}
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

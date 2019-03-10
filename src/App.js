  import React, { Component } from 'react';
  import { Layout, Button } from 'antd';
  //import { Line, defaults } from 'react-chartjs-2';
  import InputArea from './InputArea';
  import Chart from './Chart.js';
  import { defaultInputs } from './inputs.js';
  import EventsHandler from './EventsHandler.js';
  import "antd/dist/antd.css";
  import './App.css';

  const {
          Header, Footer
        } = Layout;

  class App extends Component {


    constructor(props){
      super(props);

      this.inputarea = React.createRef();
      this.state = {
        data: {

          datasets:[]
        },
        inputs: defaultInputs
      }
    }

      componentDidMount(){
        this.handleInputs(this.inputs);

      }

      handleInputs = () => {

        //let inputs = document.querySelector('textarea').value;
        //console.log(this.inputarea.current.textContent);
        let EventsParser = new EventsHandler(this.state.inputs);

        EventsParser.processData();

        let datasets = EventsParser.getDatasets();

        this.setState(
        {

          data: {

                datasets: datasets

                }
        });

      }



      onClick = event => {

        this.handleInputs();

      }

      onChange = (value, event) => {

        console.log(value);

        this.setState({
          inputs: value
        });
      }

    render() {

      return (

          <Layout>
              <Header>Alex's Challenge</Header>
              {/*<textarea onChange={this.handleChange} defaultValue={inputs}/>*/}
              <div ref={this.inputarea} className='inputarea'>
                <InputArea defaultValue={this.state.inputs} onChange={this.onChange}/>
              </div>
              <Chart data={this.state.data}/>
              <Footer>
                    <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
              </Footer>
          </Layout>

      );
    }
  }

  export default App;

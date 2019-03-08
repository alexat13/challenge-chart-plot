  import React, { Component } from 'react';
  import { Layout, Input, Button } from 'antd';
  import { Line, defaults } from 'react-chartjs-2';
  import Chart from './Chart.js';
  import { inputs } from './inputs.js';
  import EventsHandler from './EventsHandler.js';
  import { randomColor } from './randomColor.js';
  import { randomRGB } from './randomRGB.js';
  import "antd/dist/antd.css";
  import './App.css';

  const {
          Header, Footer, Content
        } = Layout;

  const { TextArea } = Input;

  class App extends Component {


    constructor(props){
      super(props);

      this.textarea = React.createRef();
      this.state = {
        data: {

          datasets:[]
        },
        textInput: ''
      }
    }

      componentDidMount(){
        this.handleInputs(inputs);

      }

      handleInputs = (value) => {

        
        let entries = value.split('\n');

        let jsonArr = entries.map(entry=>{

            let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
            return JSON.parse(formattedEntry);

        });

        let EventsParser = new EventsHandler(jsonArr);

        
        EventsParser.showData();
        EventsParser.processData();

        //let valuesMap = EventsParser.getValues();

        let datasets = EventsParser.getDatasets();

        this.setState(
        {
            
          data: {

                datasets: datasets

                }
        });

      }

    

      onClick = event => {

        let value = document.querySelector('textarea').value;

        this.handleInputs(value);
      }

    render() {
      
      return (

          <Layout>
              <Header>Alex's Challenge</Header>
              <textarea ref={this.textarea} onChange={this.handleChange} defaultValue={inputs}/>
              <Chart data={this.state.data}/>
              <Footer>
                    <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
              </Footer>
          </Layout>
      
      );
    }
  }

  export default App;

  import React, { Component } from 'react';
  import { Layout, Button } from 'antd';
  //import { Line, defaults } from 'react-chartjs-2';
  import Chart from './Chart.js';
  import { inputs } from './inputs.js';
  import EventsHandler from './EventsHandler.js';
  import "antd/dist/antd.css";
  import './App.css';

  const {
          Header, Footer
        } = Layout;

  class App extends Component {


    constructor(props){
      super(props);

      //this.textarea = React.createRef();
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

      handleInputs = () => {

        let inputs = document.querySelector('textarea').value;
        let EventsParser = new EventsHandler(inputs);

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

    render() {

      return (

          <Layout>
              <Header>Alex's Challenge</Header>
              <textarea onChange={this.handleChange} defaultValue={inputs}/>
              <Chart data={this.state.data}/>
              <Footer>
                    <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
              </Footer>
          </Layout>

      );
    }
  }

  export default App;

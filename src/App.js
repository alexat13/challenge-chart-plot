  import React, { Component } from 'react';
  import { Layout, Button } from 'antd';
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

        this.setState({
          inputs: value
        });
      }

    render() {

      return (

          <Layout>
              <Header style={{background: 'LightGray', color: '#444', fontSize: '28px'}}>Alex's Challenge</Header>
              <InputArea defaultValue={this.state.inputs} onChange={this.onChange}/>
              <Chart className='chart' data={this.state.data}/>
              <Footer style={{background: 'LightGray'}}>
                    <Button type="primary" onClick={this.onClick}>GENERATE CHART</Button>
              </Footer>
          </Layout>

      );
    }
  }

  export default App;

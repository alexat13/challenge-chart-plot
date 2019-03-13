  import React, { Component } from 'react';
  import { Layout, Button } from 'antd';
  import InputArea from './Components/InputArea/InputArea.js';
  import Chart from './Components/Chart/Chart.js';
  import { defaultInputs } from './Util/inputs.js';
  import EventsHandler from './Lib/EventsHandler.js';
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
              <InputArea values={this.state.inputs} onChange={this.onChange}/>
              <Chart className='chart' data={this.state.data}/>
              <Footer style={{background: 'LightGray'}}>
                    <Button type="primary" onClick={this.onClick}>GENERATE CHART</Button>
              </Footer>
          </Layout>

      );
    }
  }

  export default App;

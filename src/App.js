  import React, { Component } from 'react';
  import { Layout, Input, Row, Col, Button } from 'antd';
  import { Line, defaults } from 'react-chartjs-2';
  import Chart from './Chart.js';
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
          labels: ['0','1'], //needs to be given even of not used otherwise chart.js may crash
          datasets:[
            {
                   label: "Videos Made",
                   backgroundColor: "rgba(255,0,255,0.75)",
                   data: [4, 5, 13, 2, 1, 15]
            },
            {
                   label: "Subscriptions",
                   backgroundColor: "rgba(0,255,0,0.75)",
                   data: [14, 15, 3, 12, 1, 15]
            }
          ]
        },
        textInput: ''
      }
    }

      componentDidMount(){
        /*this.textarea.current.textContent = 'aaaa';
        console.log(this.textarea.current.textContent);*/

      }

     /* handleChange = (event) => {

        console.log(event.target.innerHTML);

      }*/

      handleEntries = (entries) => {

        let data = entries.map(entry=>{

          let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
          entry = JSON.parse(formattedEntry);

          return(

              {
                label: entry.type,
                backgroundColor: "rgba(255,0,255,0.75)",
                data: entry.timestamp.toString().split('').map(n=>parseInt(n))

              }


            )

        });

        //console.log(data);

        this.setState(
        {
          data: {

                datasets: data

                }
        });

        //console.log(this.state.data);

      }

      onClick = event => {

        let entries = document.querySelector('textarea').value.split('\n');

        this.handleEntries(entries);
      }

    render() {
      
      return (

          <Layout>
            <Header>Alex's Challenge</Header>
              <textarea ref={this.textarea} onChange={this.handleChange} defaultValue={`{type: 'test', timestamp: 12345}`}/>
              <Chart data={this.state.data}/>
              <Footer style={{zIndex: 1}}>
                    <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
              </Footer>
          </Layout>
      
      );
    }
  }

  export default App;

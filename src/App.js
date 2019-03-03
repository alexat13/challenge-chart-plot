import React, { Component } from 'react';
import { Layout, Input, Row, Col, Button } from 'antd';
import { Line, defaults } from 'react-chartjs-2';
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

    handleEntries = (entries) => {


      //console.log(entries.map(entry=>JSON.parse(entry)));

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

      console.log(data);

      this.setState(
      {
        data: {

              datasets: data

              }
      });

      



      /*entries.map(entry=>{


        let s = JSON.stringify(entry);
        console.log(s);
        let obj = JSON.parse(s);

        return obj.type;


      });*/

    }

    onClick = event => {

      let entries = document.querySelector('textarea').value.split('\n');
      /*console.log(JSON.parse(entries));*/
      this.handleEntries(entries);
      //console.log(document.querySelector('textarea').value.split('\n'));
    }

    getChartData = canvas => {

    const data = this.state.data;
    /*canvas.style.display = 'flex';
    canvas.style.flexShrink = 20;*/
    canvas.style.margin = 'auto';
    /*canvas.style.marginBottom = 'auto';*/
    /*canvas.height=500;*/
    canvas.style.padding='5%';

    /*canvas.style.height='1px';
    canvas.style.width='10%';*/
    console.log(canvas.style);

    let colors = ["rgba(255,0,255,0.75)","rgba(0,255,0,0.75)"];
    data.datasets.forEach((set,i) => {
      //set.backgroundColor = this.setGradientColor(canvas, colors[i]);
      set.borderWidth = 2;
      set.fill = false;
      set.borderColor = colors[i];
      set.lineTension = 0;
    });
    return data;


  }

  render() {
    
    return (

        <Layout>
          <Header>Alex's Challenge</Header>
          <Content>
            <textarea ref={this.textarea} defaultValue={'{"type": "test", "timestamp": 12345}'}/>
            <Line
                options={{
                  /*responsive: true,
                  /*apectRatio: 1,*/
                  /*maintainAspectRatio: true,*/
                  title: {
                    display: true,
                    text: 'Chart Sample',
                    fontSize: 18
                  },
                  legend: {position: 'right'}

                }}
                //data={this.getChartData}
                data={this.state.data}
              />
          </Content>
          <Footer style={{zIndex: 1}}>
                <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
          </Footer>
        </Layout>
    
    );
  }
}

export default App;

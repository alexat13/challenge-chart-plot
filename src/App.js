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
        labels: ['1','2','3','4','5'], //needs to be given even of not used otherwise chart.js may crash
        datasets:[
          {
                 label: "Videos Mades",
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

    onClick = event => {

      console.log(this.textarea.current.textContent);
    }

    getChartData = canvas => {

    const data = this.state.data;
    /*canvas.style.display = 'flex';
    canvas.style.flexShrink = 20;*/
    canvas.style.margin = 'auto';
    /*canvas.style.marginBottom = 'auto';*/
    /*canvas.height=500;*/
    canvas.style.maxHeight='350px';
    canvas.style.maxWidth='650px';
    /*canvas.style.height='auto';
    canvas.style.width='100%';*/
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
            <textarea ref={this.textarea} onChange={this.onInputChange} defaultValue={'TEXT AREA'}/>
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
                data={this.getChartData}
              />
          </Content>
          <Footer>
                <Button type="primary" onClick={this.onClick}>Generate Chart</Button>
          </Footer>
        </Layout>
    
    );
  }
}

export default App;

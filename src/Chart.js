  import React, { Component } from 'react';
  import { Line } from 'react-chartjs-2';

  class Chart extends Component {

    constructor(props){
      super(props);

      this.textarea = React.createRef();

    }

    getChartData = canvas => {

      const data = this.props.data;
      canvas.style.margin = 'auto';
      canvas.style.maxHeight='400px';
      canvas.style.maxWidth='90%';

      data.datasets.forEach((set,i) => {
        set.borderWidth = 2;
        set.fill = false;
        set.lineTension = 0;
      });

      return data;

    }

    componentDidMount(){


    }


    render(){

      return <Line
                  options={{
                    maintainAspectRatio: false,
                    title: {
                      display: false
                    },
                    legend: {position: 'right'},

                    scales:     {
                        xAxes: [{
                            type:'time',
                            time: {
                              unit: 'minute',
                              displayFormats:{
                    					minute: 'HH:mm'
                    				}
                            },
                            ticks: {
                              source: "data", beginAtZero: true,
                              //callback: (value, index,values) => {return this.getTicks(value,index,values)}
                            }
                        }]
            }


                  }}
                  data={this.getChartData}
                />
    }
  }

  export default Chart;

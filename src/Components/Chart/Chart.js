    /*This component that renders the line chart
*  with the series of events
*/

    import React, { Component } from 'react';
    import { Line } from 'react-chartjs-2';
    import './Chartjs.css';

    class Chart extends Component {

      constructor(props){
        super(props);

        this.textarea = React.createRef();

      }

      /*Fuction that is called back from the chartjs lib
      *so that we can modify the canvas properties
      */
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


      render(){

        return(
          <div className='chartcontainer'>
          <Line
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
                      					minute: 'HH:mm:ss'
                      				}
                              },
                              ticks: {
                                source: "data", beginAtZero: true,
                              }
                          }]
                        }

                    }}
                    data={this.getChartData}
                  />
                  </div>
                )
      }
    }

    export default Chart;

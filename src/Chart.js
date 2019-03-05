  import React, { Component } from 'react';
  import { Line, defaults } from 'react-chartjs-2';

  class Chart extends Component {

    constructor(props){
      super(props);

      this.textarea = React.createRef();
      
    }

    getChartData = canvas => {

      const data = this.props.data;
      canvas.style.margin = 'auto';
      canvas.style.maxHeight='400px';
      canvas.style.maxWidth='800px';

      data.datasets.forEach((set,i) => {
        set.borderWidth = 2;
        set.fill = false;
        set.borderColor = "rgba(255,0,255,0.75)";
        set.lineTension = 0;
      });

      return data;

    }

    componentDidMount(){

      
    }

    render(){
    
      return <Line
                  options={{
                    title: {
                      display: true,
                      text: 'Chart Sample',
                      fontSize: 18
                    },
                    legend: {position: 'right'}
                  }}
                  data={this.getChartData}
                />
    }
  }

  export default Chart;
/* App.js */
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';


import CanvasJS from '@canvasjs/charts';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const chartContainerStyle = {
    width: '95%', // Set the width as needed
    height: '100px' // Set the height as needed
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: ""
    },
    axisY: {
      includeZero: true
    },
    data: [{
      backgroundColor: "linear-gradient(0deg, #F5C800 0%, #FF0606 100%)",
      type: "column",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      color: "",
      dataPoints: [
        { x: 10, y: 71, color: "red" },
        { x: 20, y: 55, color: "blue" },
        { x: 20, y: 55, color: "red" },
        { x: 0, y: 0, color: "red" },
        { x: 40, y: 65, color: "yellow" },
        { x: 50, y: 71, color: "red" },
       
      
      ]
    }]
  };

  return (
    <div style={chartContainerStyle}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default App;

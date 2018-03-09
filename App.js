import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChartView from 'react-native-highcharts';

export default class App extends React.Component {
  render() {
    var Highcharts='Highcharts';
    const exampleConfig = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          marginTop:100
      },
      title: {
          text: ''
      },
      tooltip: {
          pointFormat: '{point.y}%'       
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
          pie: {
              borderWidth: 0,
              innerSize: 100,
              startAngle: 40,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false                 
              }
          }
      },
      series: [{
          showInLegend: true,
          data: [{
              name: 'Microsoft',
              y: 55
          }, {
              name: 'Chrome',
              y: 60              
          }, {
              name: 'Firefox',
              y: 20
          }, {
              name: 'Safari',
              y: 40
          }, {
              name: 'Opera',
              y: 20
          }]
      }]
  }

  return (
    <ChartView style={{height:400}} config={exampleConfig}></ChartView>
  );
  }
}

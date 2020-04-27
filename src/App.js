import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DataForm from './DataForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        region: { 
          cName: "", 
          avgAge: null, 
          avgDailyIncomeInUSD: null, 
          avgDailyIncomePopulation: null 
        }, 
      periodType: "days", 
      timeToElapse: 58, 
      reportedCases: 674, 
      population: 66622705, 
      totalHospitalBeds: 1380614 
      },
      impact: {},
      severeImpact: {},
    };
  }


  render() {
    return (
      <div>
        <h3 className="bg-primary text-white text-center p-2">
        <img src="./images/covid.jpg" className="img-fluid float-left" alt="covid-19" />
          Covid-19 Estimator App
        </h3>
        <div className="container-fluid">
          <DataForm />
        </div>
      </div>
    );
  }
  
}

export default App;

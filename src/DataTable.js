import React, { Component } from 'react'

export default class DataTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <table className="table table-striped table-bordered table-danger">
          <caption>SEVERE IMPACT</caption>
          <thead>
            <tr>
              <th>Description</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Currently Infected</td>
              <td>{this.props.severeData.currentlyInfected}</td>
            </tr>
            <tr>
              <td>infectedByRequestedTime</td>
              <td>{this.props.severeData.infectionsByRequestedTime}</td>
            </tr>
            <tr>
              <td>severeCases</td>
              <td>{this.props.severeData.severeCasesByRequestedTime}</td>
            </tr>
            <tr>
              <td>hospitalBeds</td>
              <td>{this.props.severeData.hospitalBedsByRequestedTime}</td>
            </tr>
            <tr>
              <td>casesForICU</td>
              <td>{this.props.severeData.casesForICUByRequestedTime}</td>
            </tr>
            <tr>
              <td>casesForVentilators</td>
              <td>{this.props.severeData.casesForVentilatorsByRequestedTime}</td>
            </tr>
            <tr>
              <td>Dollar InFlight</td>
              <td>{this.props.severeData.dollarsInFlight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

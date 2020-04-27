import React, { Component } from 'react'

export default class ImpactTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <table className="table table-striped table-bordered table-warning">
          <caption>IMPACT</caption>
          <thead>
            <tr>
              <th>Description</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Currently Infected</td>
              <td>{this.props.impactData.currentlyInfected}</td>
            </tr>
            <tr>
              <td>infectedByRequestedTime</td>
              <td>{this.props.impactData.infectionsByRequestedTime}</td>
            </tr>
            <tr>
              <td>severeCases</td>
              <td>{this.props.impactData.severeCasesByRequestedTime}</td>
            </tr>
            <tr>
              <td>hospitalBeds</td>
              <td>{this.props.impactData.hospitalBedsByRequestedTime}</td>
            </tr>
            <tr>
              <td>casesForICU</td>
              <td>{this.props.impactData.casesForICUByRequestedTime}</td>
            </tr>
            <tr>
              <td>casesForVentilators</td>
              <td>{this.props.impactData.casesForVentilatorsByRequestedTime}</td>
            </tr>
            <tr>
              <td>Dollar InFlight</td>
              <td>{this.props.impactData.dollarsInFlight}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    )
  }
}

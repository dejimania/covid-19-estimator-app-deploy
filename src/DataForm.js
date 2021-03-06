import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from './DataTable';
import ImpactTable from './ImpactTable'
import covid19ImpactEstimator from './estimator';
import { IconContext } from 'react-icons'
import {FaBed, FaCalendarAlt, FaUsers, FaFileAlt, FaClock, FaArrowCircleRight } from 'react-icons/fa';

toast.configure()

export default class DataForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      population: '',
      timeToElapse: '',
      reportedCases: '',
      totalHospitalBeds: '',
      periodType: 'days',
      impact: {
        currentlyInfected: '',
        infectionsByRequestedTime:'',
        severeCasesByRequestedTime:'',
        hospitalBedsByRequestedTime: '',
        casesForICUByRequestedTime: '',
        casesForVentilatorsByRequestedTime: '',
        dollarsInFlight: ''
      },
      severeImpact: {
        currentlyInfected: '',
        infectionsByRequestedTime:'',
        severeCasesByRequestedTime:'',
        hospitalBedsByRequestedTime: '',
        casesForICUByRequestedTime: '',
        casesForVentilatorsByRequestedTime: '',
        dollarsInFlight: ''
      },
      showEstimate: false
    }
  }

  handlePopulationChange = (evt) => {
    this.setState({
      population: evt.target.value
    });
  }

  handleTimeToElapseChange = (evt) => {
    this.setState({
      timeToElapse: evt.target.value
    });
  }

  handleReportedCasesChange = (evt) => {
    this.setState({
      reportedCases: evt.target.value
    });
  }

  handlePeriodTypeChange = (evt) => {
    this.setState({
      periodType: evt.target.value
    });
  }

  handleTotalHospitalBedsChange = (evt) => {
    this.setState({
      totalHospitalBeds: evt.target.value
    });
  }

  toastNotice = () => {
   
      toast.success('Success.., Check Table for details', 
        {position: toast.POSITION.TOP_CENTER,
        autoClose: 12000,
        style: {color: 'lime'}
    }); 
    // } else {
    //     toast.error('Fail.., Try again!!!', 
    //     {position: toast.POSITION.TOP_CENTER,
    //     autoClose: 5000
    //   });
    // }
    
  }

  handleSubmit = (evt) => {
    const { population, timeToElapse, reportedCases, totalHospitalBeds, periodType } = this.state;
    const data = { 
      region: { 
          name: "Africa", 
          avgAge: 19.7, 
          avgDailyIncomeInUSD: 5, 
          avgDailyIncomePopulation: 0.71 
        }, 
      periodType: periodType, 
      timeToElapse: timeToElapse, 
      reportedCases: reportedCases, 
      population: population, 
      totalHospitalBeds: totalHospitalBeds 
    };
    if (!periodType ||
        !timeToElapse ||
        !reportedCases ||
        !population ||
        !totalHospitalBeds) {
  
        return false;
    }
    const results = covid19ImpactEstimator(data);
    // console.log(results);
    this.setState({ showEstimate: true, ...results});
    this.toastNotice();
    evt.preventDefault();
  }

  
  render() {
    const { population, timeToElapse, reportedCases, totalHospitalBeds, periodType } = this.state;
    const showTable = () => {
      if (this.state.showEstimate) {
        //this.toastNotice();
        return (
          <div>
            {/* <div className="alert alert-success alert-dismissible fade show">
              <button type="button" className="close" data-dismiss="alert">&times;</button>
              <strong>Success!</strong> your estimate is below
            </div> */}
            <div className="row">
              <ImpactTable impactData={this.state.impact} className="col-6 p-4" />
              <DataTable severeData={this.state.severeImpact} className="col-6 p-4"/>
            </div>
          </div>
        );
      // } else {
      //   return (
      //     <div>
      //       <div className="alert alert-warning">
      //         <strong>Failed!</strong>Please try again
      //       </div>
      //     </div>
      //   )
      }
    };
    return (
      <div>
        <form onSubmit={ this.handleSubmit } >
          <IconContext.Provider value={{ color:"grey", size:"1.5em" }}>

            <div className="row">
              <div className="my-1 col-sm-4">
                <label className="p-2">Population <FaUsers /></label>
                <input className="form-control"
                  type="number"
                  value={population}
                  data-population
                  onChange={this.handlePopulationChange}
                />
              </div>
              <div className="my-1 col-sm-4">
                <label className="p-2">Time To Elapse <FaClock /></label>
                <input className="form-control"
                  type="number"
                  value={timeToElapse}
                  data-time-to-elapse
                  onChange={this.handleTimeToElapseChange}
                />
              </div>
              <div className="my-1 col-sm-4">
                <label className="p-2">Reported Cases <FaFileAlt /></label>
                <input className="form-control"
                  type="number"
                  value={reportedCases}
                  data-reported-cases
                  onChange={this.handleReportedCasesChange}
                />
              </div>
            </div>
            
            <div className="row">
              <div className="my-1 col-sm-6">
                <label className="p-2">Total Hospital Beds <FaBed /></label>
                <input className="form-control"
                  type="number"
                  value={totalHospitalBeds}
                  data-total-hospital-beds
                  onChange={this.handleTotalHospitalBedsChange}
                />
              </div>
              <div className="my-1 col-sm-6">
              <label className="p-2">Period Type <FaCalendarAlt /></label>
                <select className="form-control"
                  value={periodType}
                  data-period-type
                  onChange={this.handlePeriodTypeChange}
                >
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>
              <button className="btn btn-primary mt-1 mb-2"
                type="submit" data-go-estimate >Estimate <FaArrowCircleRight/></button>
            {/* onClick={this.toastNotice} */}

          </IconContext.Provider>
        </form>
        {showTable()}
        {/* <ImpactTable impactData={this.state.impact} />
        <DataTable severeData={this.state.severeImpact} /> */}
      </div>
      
    )
  }
}


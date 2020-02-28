'use strict';

import './styles/main.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

import { setDefaultOptions, loadModules } from 'esri-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import PassSelector from './components/passSelector';
import ParkingPassType from './components/parkingPassType';
import PreferencesSelector from './components/preferencesSelector';
import ParkingStatistics from './components/parkingStatistics';

setDefaultOptions({
  css: true
});

loadModules(["esri/Map", "esri/views/MapView"])
  .then(([Map, MapView]) => {
    var map = new Map({
      basemap: "streets-vector"
    });
    var view = new MapView({
      container: "mapDiv",
      map: map,
      center: [-96.749893, 32.985431],
      zoom: 16
    });
  }).catch(error => {
    console.error(error);
  });

class Main extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      currentPass : "none",
      currentPreference : "greenHall"
    };
  }
  
  render()
  {
    const { currentPass, currentPreference } = this.state;
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <PassSelector currentPass={currentPass} onPassSelect={(x) => this.setState({currentPass : x})} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 text-center border rounded">
                  <small>Available Spots</small>
                  <br />
                  <span className="h1 font-weight-bold m-0">???</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <PreferencesSelector currentPreference={currentPreference} onPreferenceSelect={(x) => this.setState({currentPreference : x})} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-4">
                  <ParkingStatistics currentPass={currentPass} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("mapOverlay"));
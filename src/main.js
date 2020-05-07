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

const refreshTime = 15000;

const names2Colors = {};
Object.values(ParkingPassType).forEach((x) => {
  names2Colors[x.name] = {
    type: "simple-marker",
    style: "square",
    color: x.color,
    size: "24px"
  };
});


setDefaultOptions({
  css: true,
  url: "https://js.arcgis.com/4.9/"
});

var pass = "none";
var preference = "greenHall";
var reload = null;

loadModules(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer", "esri/Graphic"])
  .then(([Map, MapView, GraphicsLayer, Graphic]) => {
  var map = new Map({
    basemap: "streets-vector"
  });
  var view = new MapView({
    container: "mapDiv",
    map: map,
    center: [-96.749893, 32.985431],
    zoom: 16
  });

  var layer = new GraphicsLayer({});
  
  map.add(layer);
  
  var layout = undefined;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      layout = {};
      JSON.parse(xhr.responseText).forEach((x) => {
        layout[x.id] = new Graphic({
          geometry: {
            type: "point",
            longitude: x.longitude,
            latitude: x.latitude
          },
          symbol: names2Colors[x.type] || names2Colors["None"]
        });
      });
      
      function reloadStatus() {
        var statusXhr = new XMLHttpRequest();
        statusXhr.onreadystatechange = function() {
          if(statusXhr.readyState === 4 && statusXhr.status === 200) {
            var freeSpots = JSON.parse(statusXhr.responseText).slice(0, 50);
            layer.removeAll();
            layer.addMany(freeSpots.map((x) => layout[x]));
          }
        };
        statusXhr.open("GET", "./api/status.php?prefer=" + preference + "&type=" + ParkingPassType[pass].compatiblePasses.map((x) => ParkingPassType[x].name).join(","), true);
        statusXhr.send();
      }
      
      reload = reloadStatus;
      
      reloadStatus();
      setInterval(reloadStatus, refreshTime);
    }
  };
  xhr.open("GET", "./api/layout.php", true);
  xhr.send();
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
      currentPreference : "greenHall",
      stats : null
    };
  }
  
  render()
  {
    const { currentPass, currentPreference, stats, interval } = this.state;
    
    pass = currentPass;
    preference = currentPreference;
    if(reload != null) reload();
    
    if(stats === null) {
      const updateStats = () => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4 && xhr.status === 200) {
            this.setState({stats: JSON.parse(xhr.responseText)});
          }
        };
        xhr.open("GET", "./api/status.php?digest&type=" + ParkingPassType[currentPass].compatiblePasses.map((x) => ParkingPassType[x].name).join(","), true);
        xhr.send();
      };
      if(interval != undefined) clearInterval(interval);
      updateStats();
      this.state.interval = setInterval(updateStats, refreshTime);
    }
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <PassSelector currentPass={currentPass} onPassSelect={(x) => this.setState({currentPass : x, stats: null})} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <PreferencesSelector currentPreference={currentPreference} onPreferenceSelect={(x) => this.setState({currentPreference : x, stats: null})} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="container-fluid">
              <div className="row mt-2">
                <div className="col-12 text-center border rounded">
                  <small>Available Spots (Only first 50 shown)</small>
                  <br />
                  <span className="h1 font-weight-bold m-0">{stats === null ? "???" : Object.values(stats).reduce((x, y) => x + y, 0)}</span>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12">
                  <ParkingStatistics currentPass={currentPass} stats={stats} />
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
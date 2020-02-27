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

ReactDOM.render((
  <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <div className="container-fluid">
          <div className="row">
            <PassSelector />
          </div>
          <div className="row">
            <ParkingStatistics />
          </div>
        </div>
      </div>
      <div className="col-9">
        <PreferencesSelector />
      </div>
    </div>
  </div>
  ), document.getElementById("mapOverlay"));

/*
var parkingPassType = "none";
$(document).ready(function () {
  $('#parkingPassList ul li').mousedown(function(event) {
    const newPassType = $(this).attr('value');
    $('#parkingPassCurrent .sticker').toggleClass(newPassType + ' ' + parkingPassType);
    parkingPassType = newPassType;
    $('#parkingPassList').addClass('hidden');
  });

  $('#parkingPassCurrent').mousedown(function(event) {
    $('#parkingPassList').toggleClass('hidden');
  });
});*/
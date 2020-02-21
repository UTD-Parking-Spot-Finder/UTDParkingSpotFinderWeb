'use strict';

import { loadModules } from 'esri-loader';
import $ from 'jquery';

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
});
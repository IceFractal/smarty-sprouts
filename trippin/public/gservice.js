// ===============================================================================
// Example: https://scotch.io/tutorials/making-mean-apps-with-google-maps-part-i
/*
  Use factory to create gservice (Google Map API interface)
  gservice returns an object (googleMapService) with methods to refresh map with pins
*/

// in HTML:
//   import globalVars first
//   import refresh
//   import convertToMapPoints
//   import saveData
//   import initialize
//   import hidePin

TripPin.factory('gservice', function($http, $sanitize) {

  locations = [];   // Array of locations obtained from API calls
  myMarkerArray = []; // Array of markers placed on the map

  // Initial Selected Location (default to center of the world)
  selectedLat = 19;
  selectedLong = 173;

  return googleMapService;
});
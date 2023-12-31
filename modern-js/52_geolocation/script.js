const currentSuccess = (position) => {
  const coords = position.coords;
  console.log(`Latitude: ${coords.latitude} \nLongitude: ${coords.longitude} \nAccuracy: ${coords.accuracy}`);
};
const currentError = (error) => {
  console.log(`Error: ${error.code} - ${error.message}`);
};
const currentOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000,            // Time to wait to stop trying for location
  maximumAge: 0,            // Do not use a cached position
};
navigator.geolocation.getCurrentPosition(currentSuccess, currentError, currentOptions);

const targetLocation = {
  lat: 52.520007,
  log: 13.404954
}
const watchSuccess = (position) => {
  const coords = position.coords;
  console.log(`Latitude: ${coords.latitude} \nLongitude: ${coords.longitude} \nAccuracy: ${coords.accuracy}`);
  if (coords.latitude === targetLocation.lat && coords.longitude === targetLocation.log) {
    console.log('You\'ve reached your destination');
    navigator.geolocation.clearWatch(watchID);
  }
};
const watchError = (error) => {
  console.log(`Error: ${error.code} - ${error.message}`);
};
const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000,            // Time to wait to stop trying for location
  maximumAge: 0,            // Do not use a cached position
};

const watchID = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
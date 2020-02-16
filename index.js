const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned Coords:', coords);
});

const exampleCoords = { latitude: '45.4252', longitude: '-75.7001' };

fetchISSFlyOverTimes(exampleCoords, (error, flyovertimes) =>{
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned FlyOverTimes:',flyovertimes);
});

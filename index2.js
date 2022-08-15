const canadaCode = "CA";
const usaCode = "USA";

const getURLByLocation = (location) => {
  switch(location.toLowerCase()) {
    case canadaCode.toLowerCase():
      return '/canada/home';
    case usaCode.toLowerCase():
      return '/home';
  }
  return '';
}

module.exports = getURLByLocation;
